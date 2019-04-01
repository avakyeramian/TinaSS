function MassStorage(type,brand,model,size,interface,chs,url) {
    this.name = "MassStorage";
    this.type = type;               // SSD
    this.brand = brand;             // Crucial
    this.model = model;             // BX300
    this.size = size;               // 480 GB
    this.interface = interface;     // SATA 3.0
    this.chs = chs;                 // 
    this.url = url;                 // https://www.crucial.com/wcsstore/CrucialSAS/pdf/product-flyer/crucial-bx300-ssd-productflyer-a4-en.pdf
    this.id = generateID();
}

function RAM(brand,model,size,type,freq,jedec,cas,url) {
    this.name = "RAM";
    this.brand = brand;             // Kingston
    this.model = model;             // HyperX Beast
    this.size = size;               // 8 GB
    this.type = type;               // DDR3
    this.freq = freq;               // 2400 MHz
    this.jedec = jedec;             // PC3-19200
    this.cas = cas;                 // CL11
    this.url = url;                 // https://www.kingston.com/dataSheets/KHX24C11T3K2_16X.pdf
    this.id = generateID();
}

function CPU(brand,family,model,partNum,cores,threads,freq,fsb,multiplier,architecture,socket,tdp,cache,url) {
    this.name = "CPU";
    this.brand = brand;                 // Intel
    this.family = family;               // Core 2 Quad
    this.model = model;                 // Q9550
    this.partNum = partNum;             // SLAWQ
    this.cores = cores;                 // 4
    this.threads = threads;             // 4
    this.freq = freq;                   // 2,83 GHz
    this.fsb = fsb;                     // 1333 MHz
    this.multiplier = multiplier;       // 8.5
    this.architecture = architecture;   // Yorkfield
    this.socket = socket;               // LGA775
    this.tdp = tdp;                     // 95 W
    this.cache = cache;                 // 12 MB L2
    this.url = url;                     // http://www.cpu-world.com/sspec/SL/SLAWQ.html
    this.id = generateID();
}

function GPU(brand,model,gpuBrand,gpuModel,vram,vramType,vramFreq,freq,interface,tdp,url){
    this.name = "GPU";
    this.brand = brand;             // MSI
    this.model = model;             // Armor
    this.gpuBrand = gpuBrand;       // AMD
    this.gpuModel = gpuModel;       // Radeon RX 570
    this.vram = vram;               // 4 GB
    this.vramType = vramType;       // GDDR5
    this.vramFreq = vramFreq;       // 7000 MHz
    this.freq = freq;               // 1268 MHz
    this.interface = interface;     // PCI Express x16 3.0
    this.tdp = tdp;                 // 120 W
    this.url = url;                 // https://www.msi.com/Graphics-card/Radeon-RX-570-ARMOR-4G-OC/
    this.id = generateID();
}

function Motherboard(brand,model,format,socket,nbSocket,ramType,chipset,northbridge,southbridge,url) {
    this.name = "Motherboard";
    this.brand = brand;             // MSI
    this.model = model;             // Z97-G43
    this.format = format;           // ATX
    this.socket = socket;           // LGA1150
    this.nbSocket = nbSocket;       // 1
    this.ramType = ramType;         // DDR3
    this.chipset = chipset;         // Z97
    this.northbridge = northbridge; // 
    this.southbridge = southbridge; // 
    this.url = url;                 // https://fr.msi.com/Motherboard/support/Z97-G43
    this.id = generateID();
}

function OS(family,version,architecture,url){
    this.name = "OS";
    this.family = family;               // GNU/Linux
    this.version = version;             // Ubuntu
    this.architecture = architecture;   // 64bit
    this.url = url;                     // https://www.ubuntu.com/
}

function Case(brand,model,formFactor,formatPSU,formatMOBO,color,url){
    this.name = "Case";
    this.brand = brand;                 // Zalman
    this.model = model;                 // Z9U3
    this.formFactor = formFactor;       // Mid Tower
    this.formatPSU = formatPSU;         // ATX
    this.formatMOBO = formatMOBO;       // ATX
    this.color = color;                 // Black
    this.url = url;                     // http://www.zalman.com/contents/products/view.html?no=320
    this.id = generateID();    
}

function PowerSupply(brand,model,watt,format,url){
    this.name = "PowerSupply";
    this.brand = brand;             // Seasonic
    this.model = model;             // Focus Gold SSR-550FM
    this.watt = watt;               // 550 W
    this.format = format;           // ATX
    this.url = url;                 // https://seasonic.com/pub/media/pdf/consumer/datasheet/FOCUS-Gold-FM.pdf
    this.id = generateID();
}

function Drive(type,brand,model,size,interface,url){
    this.name = "Drive";
    this.type = type;               // BD Burner
    this.brand = brand;             // Pioneer
    this.model = model;             // BDR-209DBK
    this.size = size;               // 5 1/4″
    this.interface = interface;     // Sata 1.0
    this.url = url;                 // https://www.pioneerelectronics.com/ephox/StaticFiles/PUSA/Files/Computer/BDR-209DBK/POV_BDR-209DBK.pdf
    this.id = generateID();
}

function Screen(displayResolution,aspectRatio,brand,model,size,interface,url){
    this.name = "Screen";
    this.displayResolution = displayResolution;     // 3440 x 1440
    this.aspectRatio = aspectRatio;                 // 21:9
    this.brand = brand;                             // Dell
    this.model = model;                             // UltraSharp U3417W
    this.size = size;                               // 34"
    this.interface = interface;                     // DisplayPort
    this.url = url;                                 // https://i.dell.com/sites/csdocuments/Product_Docs/en/dell_ultrasharp_34_curved_monitor_u3417w_product_spec_sheet.pdf
    this.id = generateID();
}

function Computer(nickname,image,usage,type,brand,line,model,url){
    this.name = "Computer";
    this.nickname = nickname;               // Applejack
    this.image = image;                     // *base64*
    this.usage = usage;                     // Main portable workstation
    this.type = type;                       // Laptop
    this.brand = brand;                     // Lenovo
    this.line = line;                       // Thinkpad
    this.model = model;                     // T430
    this.url = url;                         // https://www.thinkwiki.org/wiki/Category:T430
    this.id = generateID();
}