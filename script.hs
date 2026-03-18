const data = new oasis.Data();
const data = {
      id: "188e0e27-3af2-478f-af86-030c56a42edb",
      LoadChildren: false,
      Recursive: false,
      MaxChildDepth: 1,
      ContinueOnError: false,
      Version: 1,
      ProviderType: "HoloOASIS",
      SetGlobally: false,
      ShowDetailedSettings: true,
      AutoFailOverEnabled: "true",
      AutoReplicationEnabled: "false",
      AutoLoadBalanceEnabled: "false",
      AutoFailOverProviders: "MongoDBOASIS, HoloOASIS",
      AutoReplicationProviders: "MongoDBOASIS, HoloOASIS",
      AutoLoadBalanceProviders: "MongoDBOASIS, HoloOASIS",
      WaitForAutoReplicationResult: false,
  } || "188e0e27-3af2-478f-af86-030c56a42edb"
data.loadHolon(data).then(()=>{
  //pass
}).catch((err)=>{
  // pass
})
