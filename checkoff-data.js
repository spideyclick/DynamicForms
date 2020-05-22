var checkoffData = {
    "id": "mainContainer",
    "type": "container",
    "children": [
        {
            "id": "generalInfo",
            "type": "section",
            "title": "General Account Information",
            "children": [
                {
                    "id": "checkoffType",
                    "type": "multipleChoice",
                    "title": "Checkoff Type",
                    "dataSource": "['type']",
                    "choices": [
                        "Wireless",
                        "DSL",
                        "Cable"
                    ]
                },
                {
                    "id": "accountNumber",
                    "type": "digit",
                    "title": "Account Number",
                    "hint": "12345",
                    "dataSource": "['acct_num']"
                },
                {
                    "id": "accountName",
                    "type": "text",
                    "title": "Name",
                    "hint": "John Doe",
                    "dataSource": "['name']"
                },
                {
                    "id": "date",
                    "type": "text",
                    "title": "Date",
                    "hint": "2020-12-31",
                    "autoFill": "isoDate();"
                },
                {
                    "id": "connectionNumber",
                    "type": "digit",
                    "title": "Connection Number",
                    "limit": "10",
                    "dataSource": "['net_num']"
                },
                {
                    "id": "ticketStatus",
                    "type": "multipleChoice",
                    "title": "Status",
                    "manualEdit": "true",
                    "choices": [
                        "Closed",
                        "Open"
                    ]
                },
                {
                    "id": "connectionPackageDSL",
                    "type": "multipleChoice",
                    "title": "Package",
                    "manualEdit": "true",
                    "depends": "findValue('checkoffType') == 'DSL'",
                    "choices": [
                        "12/2 Mbps",
                        "20/2 Mbps",
                        "35/4 Mbps",
                        "50/10 Mbps"
                    ]
                },
                {
                    "id": "connectionPackageWireless",
                    "type": "multipleChoice",
                    "title": "Package",
                    "manualEdit": "true",
                    "depends": "findValue('checkoffType') == 'Wireless'",
                    "choices": [
                        "5/1 Mbps",
                        "10/2 Mbps",
                        "15/3 Mbps (non-LTE only)",
                        "25/3 Mbps"
                    ]
                },
                {
                    "id": "connectionPackageCable",
                    "type": "multipleChoice",
                    "title": "Package",
                    "manualEdit": "true",
                    "depends": "findValue('checkoffType') == 'Cable'",
                    "choices": [
                        "12/2 Mbps",
                        "20/3 Mbps",
                        "35/3 Mbps",
                        "50/4 Mbps"
                    ]
                }
            ]
        },
        {
            "id": "Wireless",
            "type": "section",
            "title": "Wireless",
            "depends": "findValue('checkoffType') == 'Wireless'",
            "children": [
                {
                    "id": "radioName",
                    "type": "text",
                    "title": "Radio Name",
                    "dataSource": "['name']"
                },
                {
                    "id": "radioBrand",
                    "type": "multipleChoice",
                    "title": "Radio Type",
                    "dataSource": "['plant']['WLUNIT'].split(' ')[0]",
                    "dataSourceFormat": "title",
                    "choices": [
                        "Baicells",
                        "Radwin",
                        "Alvarion"
                    ]
                },
                {
                    "id": "baicellsRadioModel",
                    "type": "multipleChoice",
                    "title": "Radio Model",
                    "dataSource": "['equipment'][Object.keys(accountData['equipment'])[0]]['model']",
                    "depends": "findValue('radioBrand') == 'Baicells'",
                    "choices": [
                        "EG7035E-M11 Atom OD04 19.5 dBi"
                    ]
                },
                {
                    "id": "baicellsRadioMac",
                    "type": "macAddress",
                    "title": "MAC Address",
                    "dataSource": "['equipment'][Object.keys(accountData['equipment'])[0]]['attributes']['MACADR']",
                    "depends": "findValue('radioBrand') == 'Baicells'"
                },
                {
                    "id": "baicellsRadioSerial",
                    "type": "text",
                    "title": "Serial Number",
                    "dataSource": "['equipment'][Object.keys(accountData['equipment'])[0]]['attributes']['SN']",
                    "depends": "findValue('radioBrand') == 'Baicells'"
                },
                {
                    "id": "baicellsRadioSim",
                    "type": "text",
                    "title": "SIM Card Number",
                    "dataSource": "['equipment'][Object.keys(accountData['equipment'])[0]]['attributes']['SIM']",
                    "depends": "findValue('radioBrand') == 'Baicells'"
                },
                {
                    "id": "baicellsRadioFirmware",
                    "type": "text",
                    "title": "Firmware",
                    "dataSource": "['equipment'][Object.keys(accountData['equipment'])[0]]['attributes']['FW']",
                    "depends": "findValue('radioBrand') == 'Baicells'"
                },
                {
                    "id": "baicellsRadioGroup",
                    "type": "text",
                    "title": "Device Group",
                    "depends": "findValue('radioBrand') == 'Baicells'"
                },
                {
                    "id": "baicellsRadioEssid",
                    "type": "text",
                    "title": "ESSID",
                    "dataSource": "['equipment'][Object.keys(accountData['equipment'])[0]]['attributes']['ESSID']",
                    "depends": "findValue('radioBrand') == 'Baicells'"
                },
                {
                    "id": "baicellsRadioVlan",
                    "type": "digit",
                    "title": "VLAN",
                    "depends": "findValue('radioBrand') == 'Baicells'"
                },
                {
                    "id": "baicellsRadioIp",
                    "type": "text",
                    "title": "Radio IP",
                    "hint": "DHCP",
                    "dataSource": "['equipment'][Object.keys(accountData['equipment'])[0]]['attributes']['IPAdd']",
                    "depends": "findValue('radioBrand') == 'Baicells'"
                },
                {
                    "id": "baicellsRadioSpeed",
                    "type": "textDouble",
                    "title": "Speed Limit (Mbps)",
                    "hint1": "upload",
                    "hint2": "download",
                    "dataSource1": "['nint_down']",
                    "dataSource2": "['nint_up']",
                    "depends": "findValue('radioBrand') == 'Baicells'"
                },
                {
                    "id": "baicellsRadioSignal",
                    "type": "textDouble",
                    "title": "Signal",
                    "hint1": "RSRP 1",
                    "hint2": "RSRP 2",
                    "depends": "findValue('radioBrand') == 'Baicells'"
                },
                {
                    "id": "baicellsRadioSinr",
                    "type": "text",
                    "title": "SINR",
                    "dataSource": "['equipment'][Object.keys(accountData['equipment'])[0]]['attributes']['RSS']",
                    "depends": "findValue('radioBrand') == 'Baicells'"
                },
                {
                    "id": "baicellsRadioDistance",
                    "type": "text",
                    "title": "Distance",
                    "hint": "Miles",
                    "depends": "findValue('radioBrand') == 'Baicells'"
                },
                {
                    "id": "baicellsRadioAzimuth",
                    "type": "text",
                    "title": "Azimuth",
                    "hint": "Check Tower Coverage",
                    "dataSource": "['equipment'][Object.keys(accountData['equipment'])[0]]['attributes']['AZIMUTH']",
                    "depends": "findValue('radioBrand') == 'Baicells'"
                },
                {
                    "id": "baicellsRadioCoords",
                    "type": "textDouble",
                    "title": "GPS Coordinates",
                    "dataSource1": "['equipment'][Object.keys(accountData['equipment'])[0]]['attributes']['GPS Coords'].split(', ')[0]",
                    "dataSource2": "['equipment'][Object.keys(accountData['equipment'])[0]]['attributes']['GPS Coords'].split(', ')[1]",
                    "depends": "findValue('radioBrand') == 'Baicells'"
                },
                {
                    "id": "baicellsRadioAGL",
                    "type": "digit",
                    "title": "Height (AGL)",
                    "dataSource": "['equipment'][Object.keys(accountData['equipment'])[0]]['attributes']['AGL']",
                    "depends": "findValue('radioBrand') == 'Baicells'"
                },
                {
                    "id": "baicellsRadioHeightMeters",
                    "type": "digit",
                    "title": "Height in meters",
                    "autoFill": "Math.round(((parseFloat(document.getElementById('baicellsRadioAGL').getElementsByTagName('input')[0].value)*0.3048) + 0.00001) * 100) / 100;",
                    "depends": "findValue('radioBrand') == 'Baicells'",
                    "readOnly": "true"
                },
                {
                    "id": "radwinModel",
                    "type": "multipleChoice",
                    "title": "Radio Model",
                    "dataSource": "['plant']['WLUNIT']",
                    "choices": [
                        "RADWIN 5510-0A30 SU",
                        "RADWIN 5510-0H30 SU",
                        "RADWIN 5525-0A30 SU",
                        "RADWIN 5525-0H30 SU",
                        "RADWIN 5600-0A58",
                        "RADWIN 5600-0P58"
                    ],
                    "depends": "findValue('radioBrand') == 'Radwin'"
                },
                {
                    "id": "radwinMacAddress",
                    "type": "macAddress",
                    "title": "MAC Address",
                    "hint": "00:15:67:XX:XX:XX",
                    "autoFill": "'00:15:67:'",
                    "dataSource": "['plant']['MACADR']",
                    "depends": "findValue('radioBrand') == 'Radwin'"
                },
                {
                    "id": "radwinSerial",
                    "type": "text",
                    "title": "Serial Number",
                    "dataSource": "['plant']['WLSER']",
                    "depends": "findValue('radioBrand') == 'Radwin'"
                },
                {
                    "id": "radwinEssid",
                    "type": "text",
                    "title": "ESSID",
                    "dataSource": "['plant']['ESSID']",
                    "depends": "findValue('radioBrand') == 'Radwin'"
                },
                {
                    "id": "radwinDistance",
                    "type": "text",
                    "title": "Distance",
                    "hint": "Miles",
                    "depends": "findValue('radioBrand') == 'Radwin'"
                },
                {
                    "id": "radwinFirmware",
                    "type": "text",
                    "title": "Firmware",
                    "depends": "findValue('radioBrand') == 'Radwin'"
                },
                {
                    "id": "radwinSpeeds",
                    "type": "textDouble",
                    "title": "Speed Limit (Mbps)",
                    "hint1": "Download",
                    "hint2": "Upload",
                    "dataSource1": "['nint_down']",
                    "dataSource2": "['nint_up']",
                    "dataSourceFormat": "*1.05",
                    "depends": "findValue('radioBrand') == 'Radwin'"
                },
                {
                    "id": "radwinHbs",
                    "type": "textDouble",
                    "title": "RSS HBS",
                    "depends": "findValue('radioBrand') == 'Radwin'"
                },
                {
                    "id": "radwinHsu",
                    "type": "textDouble",
                    "title": "RSS HSU",
                    "depends": "findValue('radioBrand') == 'Radwin'"
                },
                {
                    "id": "radwin3Tput",
                    "type": "textDouble",
                    "title": "Throughput",
                    "depends": "findValue('radioBrand') == 'Radwin' && ['RADWIN 5510-0A30 SU', 'RADWIN 5510-0H30 SU', 'RADWIN 5525-0A30 SU', 'RADWIN 5525-0H30 SU'].includes(findValue('radwinModel'))"
                },
                {
                    "id": "radwinResourcetype",
                    "type": "boolean",
                    "title": "Resource Type CIR",
                    "depends": "findValue('radioBrand') == 'Radwin' && ['RADWIN 5510-0A30 SU', 'RADWIN 5510-0H30 SU', 'RADWIN 5525-0A30 SU', 'RADWIN 5525-0H30 SU'].includes(findValue('radwinModel'))"
                },
                {
                    "id": "radwinResourcetype5x",
                    "type": "boolean",
                    "title": "Resource Type BE",
                    "depends": "findValue('radioBrand') == 'Radwin' && ['RADWIN 5600-0A58', 'RADWIN 5600-0P58'].includes(findValue('radwinModel'))"
                },
                {
                    "id": "radwinContact",
                    "type": "digit",
                    "title": "Contact",
                    "hint": "Account Number",
                    "dataSource": "['acct_num']",
                    "depends": "findValue('radioBrand') == 'Radwin'"
                },
                {
                    "id": "radwinLocation",
                    "type": "text",
                    "title": "Location",
                    "hint": "Connection Number",
                    "dataSource": "['net_num']",
                    "depends": "findValue('radioBrand') == 'Radwin'"
                },
                {
                    "id": "radwinInternalIp",
                    "type": "boolean",
                    "title": "Custom Radio IP",
                    "depends": "findValue('radioBrand') == 'Radwin' && ['RADWIN 5510-0A30 SU', 'RADWIN 5510-0H30 SU', 'RADWIN 5525-0A30 SU', 'RADWIN 5525-0H30 SU'].includes(findValue('radwinModel'))"
                },
                {
                    "id": "radwinIp",
                    "type": "text",
                    "title": "Radio IP",
                    "hint": "DHCP",
                    "autoFill": "'DHCP'",
                    "dataSource": "['plant']['SU/IP']",
                    "depends": "findValue('radwinInternalIp') == 'true'"
                },
                {
                    "id": "radwinSubnet",
                    "type": "text",
                    "title": "Subnet Mask",
                    "hint": "255.255.252.0",
                    "autoFill": "'255.255.252.0'",
                    "depends": "findValue('radwinInternalIp') == 'true'"
                },
                {
                    "id": "radwinGateway",
                    "type": "text",
                    "title": "Default Gateway",
                    "hint": "10.10.50.11",
                    "autoFill": "'10.10.50.11'",
                    "depends": "findValue('radwinInternalIp') == 'true'"
                },
                {
                    "id": "radwinTraps",
                    "type": "text",
                    "title": "Trap Destination IP",
                    "hint": "10.10.50.10",
                    "autoFill": "'10.10.50.10'",
                    "depends": "findValue('radwinInternalIp') == 'true'"
                },
                {
                    "id": "radwinMgmtVlanEnabled",
                    "type": "boolean",
                    "title": "MGMT VLAN Enabled",
                    "depends": "findValue('radwinInternalIp') == 'true'"
                },
                {
                    "id": "radwinMgmtVlanId",
                    "type": "digit",
                    "title": "MGMT VLAN ID",
                    "hint": "50",
                    "autoFill": "'50'",
                    "depends": "findValue('radwinInternalIp') == 'true'"
                },
                {
                    "id": "radwinMgmtVlanPriority",
                    "type": "digit",
                    "title": "Priority",
                    "hint": "7",
                    "autoFill": "'7'",
                    "depends": "findValue('radwinInternalIp') == 'true'"
                },
                {
                    "id": "radwinNtp",
                    "type": "text",
                    "title": "NTP Server",
                    "hint": "8.8.8.8",
                    "autoFill": "'8.8.8.8'",
                    "depends": "findValue('radioBrand') == 'Radwin' && ['RADWIN 5510-0A30 SU', 'RADWIN 5510-0H30 SU', 'RADWIN 5525-0A30 SU', 'RADWIN 5525-0H30 SU'].includes(findValue('radwinModel'))"
                },
                {
                    "id": "radwinTimeOffset",
                    "type": "text",
                    "title": "Time Offset",
                    "hint": "-360",
                    "autoFill": "'-360'",
                    "depends": "findValue('radioBrand') == 'Radwin' && ['RADWIN 5510-0A30 SU', 'RADWIN 5510-0H30 SU', 'RADWIN 5525-0A30 SU', 'RADWIN 5525-0H30 SU'].includes(findValue('radwinModel'))"
                },
                {
                    "id": "radwinSnmp",
                    "type": "text",
                    "title": "SNMP Communities (RO+RW+TRAP)",
                    "hint": "PASSWORD",
                    "autoFill": "'PASSWORD'",
                    "depends": "findValue('radioBrand') == 'Radwin' && ['RADWIN 5510-0A30 SU', 'RADWIN 5510-0H30 SU', 'RADWIN 5525-0A30 SU', 'RADWIN 5525-0H30 SU'].includes(findValue('radwinModel'))"
                },
                {
                    "id": "radwinVlanMode",
                    "type": "text",
                    "title": "VLAN Mode",
                    "hint": "Tag",
                    "autoFill": "'Tag'",
                    "depends": "findValue('radioBrand') == 'Radwin'"
                },
                {
                    "id": "radwinIngressMode",
                    "type": "text",
                    "title": "Ingress Mode",
                    "hint": "Tag",
                    "autoFill": "'Tag'",
                    "depends": "findValue('radioBrand') == 'Radwin'"
                },
                {
                    "id": "radwinVlan",
                    "type": "digit",
                    "title": "VLAN",
                    "dataSource": "['plant']['ESSIDVlan']",
                    "depends": "findValue('radioBrand') == 'Radwin'"
                },
                {
                    "id": "radwinVlanPriority",
                    "type": "digit",
                    "title": "Priority",
                    "hint": "0",
                    "autoFill": "'0'",
                    "depends": "findValue('radioBrand') == 'Radwin'"
                },
                {
                    "id": "radwinVlanEgress",
                    "type": "multipleChoice",
                    "title": "HSU Egress Traffic",
                    "depends": "findValue('radioBrand') == 'Radwin'",
                    "choices": [
                        "Untag All",
                        "Untag Filtered"
                    ]
                },
                {
                    "id": "radwinVlanAllowed",
                    "type": "text",
                    "title": "Allowed VLAN ID",
                    "hint": "785",
                    "depends": "findValue('radioBrand') == 'Radwin' && findValue('radwinVlanEgress') == 'Untag Filtered'"
                },
                {
                    "id": "alvarionModel",
                    "type": "multipleChoice",
                    "title": "Radio Model",
                    "dataSource": "['plant']['WLUNIT']",
                    "depends": "findValue('radioBrand') == 'Alvarion'",
                    "choices": [
                        "SU-A-5.8-6-BD-VL",
                        "SU-A-5.8-54-BD-VL",
                        "SU-E-5.8-6-BD-VL",
                        "SU-E-5.8-54-BD-VL"
                    ]
                },
                {
                    "id": "alvarionMac",
                    "type": "macAddress",
                    "title": "Radio Mac Address",
                    "dataSource": "['plant']['MACADR']",
                    "depends": "findValue('radioBrand') == 'Alvarion'"
                },
                {
                    "id": "alvarionSerial",
                    "type": "text",
                    "title": "Radio Serial Number",
                    "dataSource": "['plant']['WLSER']",
                    "depends": "findValue('radioBrand') == 'Alvarion'"
                },
                {
                    "id": "alvarionSue",
                    "type": "text",
                    "title": "SU-E Antenna",
                    "depends": "findValue('radioBrand') == 'Alvarion'"
                },
                {
                    "id": "alvarionESSID",
                    "type": "text",
                    "title": "ESSID",
                    "dataSource": "['plant']['ESSID']",
                    "depends": "findValue('radioBrand') == 'Alvarion'"
                },
                {
                    "id": "alvarionDistance",
                    "type": "text",
                    "title": "Distance",
                    "hint": "Miles",
                    "depends": "findValue('radioBrand') == 'Alvarion'"
                },
                {
                    "id": "alvarionFw",
                    "type": "text",
                    "title": "Firmware",
                    "hint": "6.6.2",
                    "depends": "findValue('radioBrand') == 'Alvarion'"
                },
                {
                    "id": "alvarionSpeeds",
                    "type": "textDouble",
                    "title": "Speeds",
                    "hint1": "Up",
                    "hint2": "Down",
                    "dataSource1": "['nint_down']",
                    "dataSource2": "['nint_up']",
                    "depends": "findValue('radioBrand') == 'Alvarion'"
                },
                {
                    "id": "alvarionMod",
                    "type": "digit",
                    "title": "MOD Level",
                    "hint": "1-8",
                    "depends": "findValue('radioBrand') == 'Alvarion'"
                },
                {
                    "id": "alvarionSnr",
                    "type": "textDouble",
                    "title": "SNR/RSSI",
                    "hint1": "> 10",
                    "hint2": "< -80",
                    "depends": "findValue('radioBrand') == 'Alvarion'"
                },
                {
                    "id": "alvarionSir",
                    "type": "text",
                    "title": "SIR",
                    "depends": "findValue('radioBrand') == 'Alvarion'"
                },
                {
                    "id": "alvarionEth",
                    "type": "boolean",
                    "title": "Filtering - Ethernet Only",
                    "depends": "findValue('radioBrand') == 'Alvarion'"
                },
                {
                    "id": "alvarionDhcp",
                    "type": "boolean",
                    "title": "Filtering - DHCP Disabled",
                    "depends": "findValue('radioBrand') == 'Alvarion'"
                },
                {
                    "id": "alvarionPppoe",
                    "type": "boolean",
                    "title": "Filtering - PPPoE Enabled",
                    "depends": "findValue('radioBrand') == 'Alvarion'"
                },
                {
                    "id": "alvarionArp",
                    "type": "boolean",
                    "title": "Filtering - ARP Disabled",
                    "depends": "findValue('radioBrand') == 'Alvarion'"
                },
                {
                    "id": "alvarionMgmt",
                    "type": "boolean",
                    "title": "Management IP's",
                    "depends": "findValue('radioBrand') == 'Alvarion'"
                },
                {
                    "id": "alvarionMult",
                    "type": "boolean",
                    "title": "Multicast Limiter Broadcast Packets Only",
                    "depends": "findValue('radioBrand') == 'Alvarion'"
                },
                {
                    "id": "alvarionCal",
                    "type": "boolean",
                    "title": "Field Calibration",
                    "depends": "findValue('radioBrand') == 'Alvarion'"
                }
            ]
        },
        {
            "id": "DSL",
            "type": "section",
            "title": "DSL",
            "depends": "findValue('checkoffType') == 'DSL'",
            "children": [
                {
                    "id": "dslBonded",
                    "type": "boolean",
                    "title": "Bonded"
                },
                {
                    "id": "dlc",
                    "type": "text",
                    "title": "DLC-EN",
                    "hint": "DLC00-(shelf)-(slot)-(port)",
                    "dataSource": "['plant']['DLC-EN']"
                },
                {
                    "id": "dslMode",
                    "type": "multipleChoice",
                    "title": "DSL Mode",
                    "manualEdit": "true",
                    "choices": [
                        "ADSL 2+",
                        "ADSL 2+M",
                        "VDSL",
                        "G.dmt"
                    ]
                },
                {
                    "id": "dslPair",
                    "type": "text",
                    "title": "Cable Pair"
                },
                {
                    "id": "dslFilter",
                    "type": "multipleChoice",
                    "title": "Filter",
                    "manualEdit": "true",
                    "choices": [
                        "Protector",
                        "Protector (old)",
                        "Green",
                        "Purple"
                    ]
                },
                {
                    "id": "dslSnr",
                    "type": "textDouble",
                    "title": "SNR"
                },
                {
                    "id": "dslSnr2",
                    "type": "textDouble",
                    "title": "SNR 2",
                    "depends": "findValue('dslBonded') == 'true'"
                },
                {
                    "id": "dslAttenuation",
                    "type": "textDouble",
                    "title": "Attenuation"
                },
                {
                    "id": "dslAttenuation2",
                    "type": "textDouble",
                    "title": "Attenuation 2",
                    "depends": "findValue('dslBonded') == 'true'"
                },
                {
                    "id": "dslMaxAttain",
                    "type": "textDouble",
                    "title": "Max Attain"
                },
                {
                    "id": "dslMaxAttain2",
                    "type": "textDouble",
                    "title": "Max Attain 2",
                    "depends": "findValue('dslBonded') == 'true'"
                },
                {
                    "id": "dslLineRate",
                    "type": "textDouble",
                    "title": "Line Rate"
                },
                {
                    "id": "dslLineRate2",
                    "type": "textDouble",
                    "title": "Line Rate 2",
                    "depends": "findValue('dslBonded') == 'true'"
                }
            ]
        },
        {
            "id": "Cable",
            "type": "section",
            "title": "Cable",
            "depends": "findValue('checkoffType') == 'Cable'",
            "children": [
                {
                    "id": "cblModem",
                    "type": "text",
                    "title": "Modem",
                    "dataSource": "['plant']['CABMOD']",
                    "depends": "findValue('checkoffType') == 'Cable'"
                },
                {
                    "id": "cblMac",
                    "type": "macAddress",
                    "title": "MAC Address",
                    "dataSource": "['plant']['MACADR']",
                    "depends": "findValue('checkoffType') == 'Cable'"
                },
                {
                    "id": "cblCpeMac",
                    "type": "macAddress",
                    "title": "CPE MAC Address",
                    "depends": "findValue('checkoffType') == 'Cable'"
                },
                {
                    "id": "cblIp",
                    "type": "text",
                    "title": "Modem IP",
                    "depends": "findValue('checkoffType') == 'Cable'"
                },
                {
                    "id": "cblMap",
                    "type": "text",
                    "title": "MAP Number",
                    "depends": "findValue('checkoffType') == 'Cable'"
                },
                {
                    "id": "cblPed",
                    "type": "text",
                    "title": "PED",
                    "depends": "findValue('checkoffType') == 'Cable'"
                },
                {
                    "id": "cblNode",
                    "type": "multipleChoice",
                    "title": "Cable Node",
                    "dataSource": "['plant']['NODE']",
                    "choices": [
                        "NODE A",
                        "NODE B",
                        "NODE C",
                        "NODE D"
                    ],
                    "depends": "findValue('checkoffType') == 'Cable'"
                },
                {
                    "id": "cblTested",
                    "type": "boolean",
                    "title": "Cable Tested",
                    "depends": "findValue('checkoffType') == 'Cable'"
                },
                {
                    "id": "cblMultiChannel",
                    "type": "boolean",
                    "title": "Multiple Channels",
                    "depends": "findValue('checkoffType') == 'Cable'"
                },
                {
                    "id": "cblSNR",
                    "type": "text",
                    "title": "SNR",
                    "hint": "> 25",
                    "depends": "findValue('checkoffType') == 'Cable'"
                },
                {
                    "id": "cblSNR2",
                    "type": "text",
                    "title": "SNR 2",
                    "hint": "> 25",
                    "depends": "findValue('cblMultiChannel') == 'true'"
                },
                {
                    "id": "cblSNR3",
                    "type": "text",
                    "title": "SNR 3",
                    "hint": "> 25",
                    "depends": "findValue('cblMultiChannel') == 'true'"
                },
                {
                    "id": "cblSNR4",
                    "type": "text",
                    "title": "SNR 4",
                    "hint": "> 25",
                    "depends": "findValue('cblMultiChannel') == 'true'"
                },
                {
                    "id": "cblPower",
                    "type": "textDouble",
                    "title": "Power (Down/Up)",
                    "hint1": "-15 to 15",
                    "hint2": "40 to 55",
                    "depends": "findValue('checkoffType') == 'Cable'"
                },
                {
                    "id": "cblPower2",
                    "type": "textDouble",
                    "title": "Power (Down/Up) 2",
                    "hint1": "-15 to 15",
                    "hint2": "40 to 55",
                    "depends": "findValue('cblMultiChannel') == 'true'"
                },
                {
                    "id": "cblPower3",
                    "type": "textDouble",
                    "title": "Power (Down/Up) 3",
                    "hint1": "-15 to 15",
                    "hint2": "40 to 55",
                    "depends": "findValue('cblMultiChannel') == 'true'"
                },
                {
                    "id": "cblPower4",
                    "type": "textDouble",
                    "title": "Power (Down/Up) 4",
                    "hint1": "-15 to 15",
                    "hint2": "40 to 55",
                    "depends": "findValue('cblMultiChannel') == 'true'"
                },
                {
                    "id": "cblFreq",
                    "type": "text",
                    "title": "Frequency",
                    "depends": "findValue('checkoffType') == 'Cable'"
                },
                {
                    "id": "cblFreq2",
                    "type": "text",
                    "title": "Frequency 2",
                    "depends": "findValue('cblMultiChannel') == 'true'"
                },
                {
                    "id": "cblFreq3",
                    "type": "text",
                    "title": "Frequency 3",
                    "depends": "findValue('cblMultiChannel') == 'true'"
                },
                {
                    "id": "cblFreq4",
                    "type": "text",
                    "title": "Frequency 4",
                    "depends": "findValue('cblMultiChannel') == 'true'"
                },
                {
                    "id": "cblOnly",
                    "type": "boolean",
                    "title": "Modem Only",
                    "depends": "findValue('checkoffType') == 'Cable'"
                },
                {
                    "id": "cblTv",
                    "type": "boolean",
                    "title": "Cable TV",
                    "depends": "findValue('checkoffType') == 'Cable'"
                },
                {
                    "id": "cblTraps",
                    "type": "boolean",
                    "title": "Traps",
                    "depends": "findValue('checkoffType') == 'Cable'"
                },
                {
                    "id": "trapCms",
                    "type": "boolean",
                    "title": "Trap: CMS",
                    "depends": "findValue('cblTraps') == 'true'"
                },
                {
                    "id": "trap2",
                    "type": "boolean",
                    "title": "Trap: 2",
                    "depends": "findValue('cblTraps') == 'true'"
                },
                {
                    "id": "trap5",
                    "type": "boolean",
                    "title": "Trap: 5",
                    "depends": "findValue('cblTraps') == 'true'"
                },
                {
                    "id": "trapAf",
                    "type": "boolean",
                    "title": "Trap: A-F",
                    "depends": "findValue('cblTraps') == 'true'"
                },
                {
                    "id": "trapAi",
                    "type": "boolean",
                    "title": "Trap: A-I",
                    "depends": "findValue('cblTraps') == 'true'"
                },
                {
                    "id": "trapGhi",
                    "type": "boolean",
                    "title": "Trap: GHI",
                    "depends": "findValue('cblTraps') == 'true'"
                }
            ]
        },
        {
            "id": "routerInfo",
            "type": "section",
            "title": "Router",
            "pageBreak": "true",
            "children": [
                {
                    "id": "rtOwned",
                    "type": "boolean",
                    "title": "Customer Owned Router"
                },
                {
                    "id": "rtModel",
                    "type": "text",
                    "title": "Router Model",
                    "dataSource": "['plant']['DSLMOD']",
                    "depends": "findValue('rtOwned') == 'false'"
                },
                {
                    "id": "rtMac",
                    "type": "macAddress",
                    "title": "MAC Address",
                    "dataSource": "['plant']['MACADR']",
                    "depends": "findValue('rtOwned') == 'false'"
                },
                {
                    "id": "rtBridge",
                    "type": "boolean",
                    "title": "Bridge Mode",
                    "depends": "findValue('rtOwned') == 'false'"
                },
                {
                    "id": "rtAdmin",
                    "type": "boolean",
                    "title": "Changed Admin Login",
                    "depends": "findValue('rtOwned') == 'false'"
                },
                {
                    "id": "rtPassword",
                    "type": "text",
                    "title": "Router Password",
                    "depends": "findValue('rtAdmin') == 'true'"
                },
                {
                    "id": "rtPortTrue",
                    "type": "boolean",
                    "title": "Custom Router Port",
                    "depends": "findValue('rtOwned') == 'false'"
                },
                {
                    "id": "rtPort",
                    "type": "digit",
                    "title": "Login Port",
                    "depends": "findValue('rtPortTrue') == 'true'"
                },
                {
                    "id": "wifiSsid",
                    "type": "text",
                    "title": "Wi-Fi SSID",
                    "depends": "findValue('rtOwned') == 'false'"
                },
                {
                    "id": "wifiPasswordEnabled",
                    "type": "boolean",
                    "title": "WPA2-Secured",
                    "depends": "findValue('rtOwned') == 'false'"
                },
                {
                    "id": "wifiPassword",
                    "type": "text",
                    "title": "Wi-Fi Password",
                    "depends": "findValue('wifiPasswordEnabled') == 'true'"
                },
                {
                    "id": "rtFirmware",
                    "type": "text",
                    "title": "Firmware",
                    "depends": "findValue('rtOwned') == 'false'"
                },
                {
                    "id": "rtWifiButton",
                    "type": "boolean",
                    "title": "Wi-Fi Button Disabled",
                    "depends": "findValue('rtOwned') == 'false'"
                },
                {
                    "id": "rtTr069",
                    "type": "boolean",
                    "title": "ACS Informing",
                    "depends": "findValue('rtOwned') == 'false'"
                }
            ]
        },
        {
            "id": "installationSection",
            "type": "section",
            "title": "Installation Information",
            "children": [
                {
                    "id": "locationOutdoor",
                    "type": "textBox",
                    "title": "Location of Outdoor Unit",
                    "hint": "Location of Outdoor Unit",
                    "depends": "findValue('checkoffType') == 'Wireless'"
                },
                {
                    "id": "locationCable",
                    "type": "textBox",
                    "title": "Location of Cable",
                    "hint": "Location of Cable",
                    "depends": "findValue('checkoffType') == 'Wireless'"
                },
                {
                    "id": "locationIndoor",
                    "type": "textBox",
                    "title": "Location of Indoor Unit",
                    "hint": "Location of Indoor Unit"
                },
                {
                    "id": "bw1",
                    "type": "textDouble",
                    "title": "Bandwidth 1"
                },
                {
                    "id": "bw2",
                    "type": "textDouble",
                    "title": "Bandwidth 2"
                },
                {
                    "id": "bw3",
                    "type": "textDouble",
                    "title": "Bandwidth 3"
                },
                {
                    "id": "bw4",
                    "type": "textDouble",
                    "title": "Bandwidth 4"
                },
                {
                    "id": "bw5",
                    "type": "textDouble",
                    "title": "Bandwidth 5"
                },
                {
                    "id": "bwAverage",
                    "type": "textDouble",
                    "title": "Average",
                    "autoFill1": "total=0;nSpeeds=0;for (i = 1; i < 6; i++) {thisSpeed = parseFloat(document.getElementById('bw' + i).children[0].value); if (!isNaN(thisSpeed)) {total = total + thisSpeed;nSpeeds = nSpeeds + 1;}}average = total / nSpeeds;if (isNaN(average)) { average = '-' } else {average = average.toString();if (average.includes('.')) {if (average.split('.')[1].length > 2) { average = average.split('.')[0] + '.' + average.split('.')[1].slice(0, 2) };};}; average;",
                    "autoFill2": "total=0;nSpeeds=0;for (i = 1; i < 6; i++) {thisSpeed = parseFloat(document.getElementById('bw' + i).children[1].value); if (!isNaN(thisSpeed)) {total = total + thisSpeed;nSpeeds = nSpeeds + 1;}}average = total / nSpeeds;if (isNaN(average)) { average = '-' } else {average = average.toString();if (average.includes('.')) {if (average.split('.')[1].length > 2) { average = average.split('.')[0] + '.' + average.split('.')[1].slice(0, 2) };};}; average;",
                    "readOnly": "true"
                },
                {
                    "id": "ground",
                    "type": "boolean",
                    "title": "Unit Grounded"
                },
                {
                    "id": "groundMethod",
                    "type": "multipleChoice",
                    "title": "Grounding Method",
                    "depends": "findValue('ground') == 'true'",
                    "choices": [
                        "Rod",
                        "Clamp",
                        "Phone Line"
                    ]
                },
                {
                    "id": "customerHome",
                    "type": "boolean",
                    "title": "Customer Home"
                },
                {
                    "id": "verbalAgreement",
                    "type": "boolean",
                    "title": "Verbal Agreement?",
                    "depends": "findValue('customerHome') == 'false'"
                },
                {
                    "id": "doorHanger",
                    "type": "boolean",
                    "title": "Leave Door Hanger?",
                    "depends": "findValue('customerHome') == 'false' && findValue('verbalAgreement') == 'false'"
                },
                {
                    "id": "confirmedBy",
                    "type": "multipleChoice",
                    "title": "Info Confirmed by",
                    "manualEdit": "true",
                    "choices": [
                        "Rebecca",
                        "Ryan",
                        "Don",
                        "James",
                        "Corey",
                        "Zach"
                    ]
                },
                {
                    "id": "Installer",
                    "type": "multipleChoice",
                    "title": "Installer(s)",
                    "manualEdit": "true",
                    "choices": [
                        "Josh",
                        "Kevin",
                        "Shawn",
                        "Lance",
                        "Brandon",
                        "Ted"
                    ]
                }
            ]
        },
        {
            "id": "comments",
            "type": "textBox",
            "title": "Additional Comments",
            "hint": "Additional Comments"
        }
    ]
}
