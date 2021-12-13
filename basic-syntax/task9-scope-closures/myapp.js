var pc = {
    bootingUp : function(){return "Starting up..."},
    motherboard : {
        specinfo : 
        {
            manufacturer : "Asus",
            series : "PRIME B450M-A",
            chipset : "B450",
            IO :
            [
                "dsub",
                "dvi-d",
                "hdmi",
                usb3gen1 = ["port1","port2","fport1"],
                usb3gen2 = ["port1","port2"],
                usb2 = ["port1","port2"],
                "lan",
                "audiojack",
                "ps/2"
            ],
            slotram : 4,
            PCIe3 : 1,
            socket : "AM4",
            mdot2 : 1,
            PCIex4 : 1,
            SATA6gb : 6
        }
        
    },
    ram : {
        manufacturer : "Corsair",
        size : "4GB",
        count : 2,
        rgb : true,
        type : "DDR4"
    },
    cpu : {
        manufacturer : "AMD",
        type : "Ryzen-5",
        series : "5600",
        clock : 4.1
    },
    vga : {
        manufacturer : "Nvidia",
        type : "RTX",
        series : "3080",
        vram : 16
    },
    cooler : {
        manufacturer : "Cooler-Master",
        type : "SC",
        series : "212"
    },
    ssd : [
        "Samsung",
        512,
        "M.2"
    ]

};