from pypdf import PdfReader, PdfWriter

# Read the input
reader = PdfReader("side-by-side-subfig.pdf")
page = reader.pages[0]

# Add to the writer
writer = PdfWriter()
writer_page = writer.add_page(page)

# Scale
writer_page.scale_by(0.5)

# Write the result to a file
writer.write("out-scale-all.pdf")
