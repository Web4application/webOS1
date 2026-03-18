/**
 * webOS1 Kernel Core
 * Handles App Lifecycle, Window Management, and Sandboxing
 */
const webOS = {
    processTable: new Map(),
    nextPID: 100,

    // Core Method: Launch an app
    launch: async function(appPath) {
        console.log(`[Kernel] Initializing: ${appPath}`);
        
        // 1. Fetch app config (app.json)
        try {
            const response = await fetch(`${appPath}/app.json`);
            const appConfig = await response.json();
            
            // 2. Register Process
            const pid = this.nextPID++;
            this.processTable.set(pid, { ...appConfig, status: 'running' });

            // 3. Hand off to UI to Create Window
            this.createWindow(pid, appConfig, appPath);
            
            return pid;
        } catch (err) {
            console.error("[Kernel] Launch failed:", err);
        }
    },

    // UI Method: Build the sandbox window
    createWindow: function(pid, config, path) {
        const desktop = document.getElementById('desktop-ui');
        
        const win = document.createElement('div');
        win.className = 'window';
        win.id = `proc-${pid}`;
        win.style.width = config.width || '400px';
        win.style.height = config.height || '300px';

        // Title Bar & Controls
        win.innerHTML = `
            <div class="title-bar" onmousedown="webOS.focusWindow(${pid})">
                <span>${config.name} (PID: ${pid})</span>
                <button onclick="webOS.remove(${pid})">X</button>
            </div>
            <iframe src="${path}/index.html" 
                    sandbox="allow-scripts" 
                    class="app-viewport">
            </iframe>
        `;

        desktop.appendChild(win);
        this.makeDraggable(win);
    },

    // Lifecycle Method: Kill process and remove UI
    remove: function(pid) {
        console.log(`[Kernel] Terminating PID: ${pid}`);
        const win = document.getElementById(`proc-${pid}`);
        if (win) win.remove();
        this.processTable.delete(pid);
    },

    // AI/System: Focus management
    focusWindow: function(pid) {
        document.querySelectorAll('.window').forEach(w => w.style.zIndex = 1);
        document.getElementById(`proc-${pid}`).style.zIndex = 100;
    },

    // Helper: Simple dragging logic
    makeDraggable: function(el) {
        // Implementation for window dragging...
    }
};

// Export to Global Scope
window.webOS = webOS;
webOS.printLanding = function(landingId) {
    // 1. Temporarily focus the landing content
    const landing = document.getElementById(landingId);
    landing.classList.add('landing-page');
    
    // 2. Trigger the browser print dialog (which uses the CSS above)
    window.print();
    
    // 3. Cleanup after printing
    landing.classList.remove('landing-page');
};
// kernel.js addition
webOS.exportToPDF = function(elementId, filename = 'webOS-snapshot.pdf') {
    const element = document.getElementById(elementId);
    const options = {
        margin:       10,
        filename:     filename,
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 2 }, // Higher scale = better quality
        jsPDF:        { unit: 'mm', format: 'a4', orientation: 'landscape' }
    };

    // New Promise-based usage:
    html2pdf().set(options).from(element).save();
};
webOS.generateFirmPDF = function(data) {
    // 1. Create a temporary container
    const printArea = document.createElement('div');
    printArea.className = 'firm-template';
    
    // 2. Build the 'Odd' Grid from data
    printArea.innerHTML = `
        <div class="firm-header">System Report: ${data.title}</div>
        <div class="label">Kernel ID</div> <div class="content">${data.id}</div>
        <div class="label">Timestamp</div> <div class="content">${new Date().toISOString()}</div>
        <div class="label">Status</div>    <div class="content">VERIFIED</div>
    `;

    // 3. Append, Print, and Remove
    document.body.appendChild(printArea);
    window.print(); 
    document.body.removeChild(printArea);
};
webOS.printBento = function(elementId) {
    const element = document.getElementById(elementId);
    
    const options = {
        margin: 5,
        filename: 'app-snapshot.pdf',
        image: { type: 'jpeg', quality: 1 },
        html2canvas: { scale: 3 }, // Keeps the "Firm" edges sharp
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    html2pdf().set(options).from(element).save();
};

