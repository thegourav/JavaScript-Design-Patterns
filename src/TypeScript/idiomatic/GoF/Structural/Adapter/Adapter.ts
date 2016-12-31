// ==============================
// CONNECTIONS
// ==============================

// VGA has its own interface which handles images only through an analog signal
interface VGA {
    name: string;
    data: string;
    signal: string;
    handleAnalogSignal(): string;
}

const vga: VGA = {
    name: "VGA",
    data: "images",
    signal: "analog",
    handleAnalogSignal() {
        return `Interface: ${this.name}
Data: ${this.data}
Signal: ${this.signal}`;
    }
};

// But your computer uses HDMI as output and your projector uses VGA as input...
// Here you need an adapter if you want to display images.
interface HDMIToVGAAdapter {
    vga: VGA;
    handleDigitalSignal(): string;
}

const hdmiToVgaAdapter: HDMIToVGAAdapter = {
    vga: vga,
    handleDigitalSignal() {
        return this.vga.handleAnalogSignal();
    }
};

// ==============================
// TEST
// ==============================

console.log(hdmiToVgaAdapter.handleDigitalSignal()); // Your computer uses HDMI and your projector uses VGA