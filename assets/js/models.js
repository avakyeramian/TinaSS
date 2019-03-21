function generateID() {
    var date = Date.now();
    
    if(generateID.previous == 0){
        generateID.previous = date;
        return generateID.previous;
    }else{
        generateID.previous = generateID.previous + 1;
        return generateID.previous;
    }
}

generateID.previous = 0;

function convertToBytes(value,multiple){
    value = parseInt(value);
    switch (multiple.split('')[0]){ // get the multiple
        case 'o':
            break;
        case 'B':
            break;
        case 'K':
            value=value*1000;
            break;
        case 'M':
            value=value*1000000;
            break;
        case 'G':
            value=value*1000000000;
            break;
        case 'T':
            value=value*1000000000000;
            break;
        case 'P':
            value=value*1000000000000000;
            break;
        default:
            break;
    }
    return value;
}

function MassStorage(model,brand,size,type,interface,chs,url) {
    this.name = "MassStorage";
    this.model = model;
    this.brand = brand;
    this.size = size;               // In Bytes !
    this.type = type;               // SSD or HDD ( ͡° ͜ʖ ͡°)
    this.interface = interface;     // PATA,SCSI,SATA,SAS
    this.chs = chs;                 // Cylinder Head Sector
    this.url = url;
    this.id = generateID();
}

function RAM(model,brand,size,type,freq,jedec,cas,url) {
    this.name = "RAM";
    this.model = model;
    this.brand = brand;
    this.size = size;               // In Bytes !
    this.type = type;               // SDRAM,DDR2 SO-DIMM,EDO
    this.freq = freq;               // 3200
    this.jedec = jedec;             // PC4-25600
    this.cas = cas;                 // CAS Latency 16 
    this.url = url;
    this.id = generateID();
}

function CPU(model,brand,family,partNum,cores,threads,freq,fsb,multiplier,architecture,socket,tdp,cache,url) {
    this.name = "CPU";
    this.model = model;
    this.brand = brand;
    this.family = family;
    this.partNum = partNum;
    this.cores = cores;
    this.threads = threads;
    this.freq = freq;
    this.fsb = fsb;
    this.multiplier = multiplier;
    this.architecture = architecture;
    this.socket = socket;
    this.tdp = tdp;
    this.cache = cache;
    this.url = url;
    this.id = generateID();
}

function GPU(model,brand,gpuBrand,freq,vram,vramType,vramFreq,interface,tdp,url){
    this.name = "GPU";
    this.gpuBrand = gpuBrand;
    this.freq = freq;
    this.vram = vram;
    this.vramType = vramType;
    this.vramFreq = vramFreq;
    this.interface = interface;
    this.tdp = tdp;
    this.url = url;
    this.id = generateID();
}

function Motherboard(model,brand,format,socket,nbSocket,ramType,chipset,northbridge,southbridge,url) {
    this.name = "Motherboard";
    this.model = model;
    this.brand = brand;
    this.format = format;
    this.socket = socket;
    this.nbSocket = nbSocket;
    this.ramType = ramType;
    this.chipset = chipset;
    this.northbridge = northbridge;
    this.southbridge = southbridge;
    this.url = url;
    this.id = generateID();
}

function OS(family,version,architecture,url){
    this.name = "OS";
    this.family = family;
    this.version = version;
    this.architecture = architecture;
    this.url = url;
}

function Case(model,brand,formFactor,formatPSU,formatMOBO,color,url){
    this.name = "Case";
    this.model = model;
    this.brand = brand;
    this.formFactor = formFactor;
    this.formatPSU = formatPSU;
    this.formatMOBO = formatMOBO;
    this.color = color;
    this.url = url;
    this.id = generateID();    
}

function PowerSupply(model,brand,watt,format,url){
    this.name = "PowerSupply";
    this.model = model;
    this.brand = brand;
    this.watt = watt;
    this.format = format;
    this.url = url;
    this.id = generateID();
}

function Drive(model,brand,type,size,interface,url){
    this.name = "Drive";
    this.model = model;
    this.brand = brand;
    this.type = type;
    this.size = size;
    this.interface = interface;
    this.url = url;
    this.id = generateID();
}

function Screen(model,brand,displayResolution,size,aspectRatio,interface,url){
    this.name = "Screen";
    this.model = model;
    this.brand = brand;
    this.displayResolution = displayResolution;
    this.size = size;
    this.aspectRatio = aspectRatio;
    this.interface = interface;
    this.url = url;
    this.id = generateID();
}

function Computer(label,image,usage,type,brand,line,model,url){
    this.name = "Computer";
    this.label = label;
    this.image = image;
    this.usage = usage;
    this.type = type;
    this.brand = brand;
    this.line = line;
    this.model = model;
    this.url = url;
    this.id = generateID();
}