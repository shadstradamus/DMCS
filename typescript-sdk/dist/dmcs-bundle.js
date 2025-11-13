(function(window) {
  'use strict';
  
  // Embed classification data
  const classificationData = {
  "dmcs_version": "1.2.2",
  "release_date": "2025-11-12",
  "description": "Dynamic Multi-Dimensional Classification Standard - Full Classification",
  "industries": [
    {
      "label": "Energy",
      "id": "01",
      "level": "industry",
      "parent_id": null,
      "classification": "GIC",
      "since": "2025-11-08",
      "status": "active",
      "sectors": [
        {
          "label": "Upstream & Exploration",
          "id": "01.01",
          "level": "sector",
          "parent_id": "01",
          "classification": "GIC",
          "since": "2025-11-08",
          "status": "active",
          "subsectors": [
            {
              "label": "Conventional Oil & Gas",
              "id": "01.01.001",
              "level": "subsector",
              "parent_id": "01.01",
              "classification": "GIC",
              "since": "2025-11-08",
              "status": "active",
              "segments": [],
              "sector_id": "01.01",
              "industry_id": "01"
            },
            {
              "label": "Unconventional / Shale",
              "id": "01.01.002",
              "level": "subsector",
              "parent_id": "01.01",
              "classification": "GIC",
              "since": "2025-11-08",
              "status": "active",
              "segments": [],
              "sector_id": "01.01",
              "industry_id": "01"
            },
            {
              "label": "Offshore E&P",
              "id": "01.01.003",
              "level": "subsector",
              "parent_id": "01.01",
              "classification": "GIC",
              "since": "2025-11-08",
              "status": "active",
              "segments": [],
              "sector_id": "01.01",
              "industry_id": "01"
            },
            {
              "label": "Oilfield Services & Drilling",
              "id": "01.01.004",
              "level": "subsector",
              "parent_id": "01.01",
              "classification": "GIC",
              "since": "2025-11-08",
              "status": "active",
              "segments": [],
              "sector_id": "01.01",
              "industry_id": "01"
            }
          ],
          "industry_id": "01"
        },
        {
          "label": "Midstream & Transport",
          "id": "01.02",
          "level": "sector",
          "parent_id": "01",
          "classification": "GIC",
          "since": "2025-11-08",
          "status": "active",
          "subsectors": [
            {
              "label": "Pipelines",
              "id": "01.02.001",
              "level": "subsector",
              "parent_id": "01.02",
              "classification": "GIC",
              "since": "2025-11-08",
              "status": "active",
              "segments": [],
              "sector_id": "01.02",
              "industry_id": "01"
            },
            {
              "label": "LNG & Storage",
              "id": "01.02.002",
              "level": "subsector",
              "parent_id": "01.02",
              "classification": "GIC",
              "since": "2025-11-08",
              "status": "active",
              "segments": [],
              "sector_id": "01.02",
              "industry_id": "01"
            },
            {
              "label": "Marine Energy Transport",
              "id": "01.02.003",
              "level": "subsector",
              "parent_id": "01.02",
              "classification": "GIC",
              "since": "2025-11-08",
              "status": "active",
              "segments": [],
              "sector_id": "01.02",
              "industry_id": "01"
            }
          ],
          "industry_id": "01"
        },
        {
          "label": "Refining & Marketing",
          "id": "01.03",
          "level": "sector",
          "parent_id": "01",
          "classification": "GIC",
          "since": "2025-11-08",
          "status": "active",
          "subsectors": [
            {
              "label": "Refineries",
              "id": "01.03.001",
              "level": "subsector",
              "parent_id": "01.03",
              "classification": "GIC",
              "since": "2025-11-08",
              "status": "active",
              "segments": [],
              "sector_id": "01.03",
              "industry_id": "01"
            },
            {
              "label": "Fuel Retail & Stations",
              "id": "01.03.002",
              "level": "subsector",
              "parent_id": "01.03",
              "classification": "GIC",
              "since": "2025-11-08",
              "status": "active",
              "segments": [],
              "sector_id": "01.03",
              "industry_id": "01"
            },
            {
              "label": "Lubricants & Specialties",
              "id": "01.03.003",
              "level": "subsector",
              "parent_id": "01.03",
              "classification": "GIC",
              "since": "2025-11-08",
              "status": "active",
              "segments": [],
              "sector_id": "01.03",
              "industry_id": "01"
            }
          ],
          "industry_id": "01"
        },
        {
          "label": "Renewables & Clean Power",
          "id": "01.04",
          "level": "sector",
          "parent_id": "01",
          "classification": "GIC",
          "since": "2025-11-08",
          "status": "active",
          "subsectors": [
            {
              "label": "Utility-Scale Solar",
              "id": "01.04.001",
              "level": "subsector",
              "parent_id": "01.04",
              "classification": "GIC",
              "since": "2025-11-08",
              "status": "active",
              "segments": [],
              "sector_id": "01.04",
              "industry_id": "01"
            },
            {
              "label": "Wind & Offshore Wind",
              "id": "01.04.002",
              "level": "subsector",
              "parent_id": "01.04",
              "classification": "GIC",
              "since": "2025-11-08",
              "status": "active",
              "segments": [],
              "sector_id": "01.04",
              "industry_id": "01"
            },
            {
              "label": "Bioenergy & Waste-to-Energy",
              "id": "01.04.003",
              "level": "subsector",
              "parent_id": "01.04",
              "classification": "GIC",
              "since": "2025-11-08",
              "status": "active",
              "segments": [],
              "sector_id": "01.04",
              "industry_id": "01"
            },
            {
              "label": "Storage & Grid Integrators",
              "id": "01.04.004",
              "level": "subsector",
              "parent_id": "01.04",
              "classification": "GIC",
              "since": "2025-11-08",
              "status": "active",
              "segments": [],
              "sector_id": "01.04",
              "industry_id": "01"
            },
            {
              "label": "Electrolyzers & Hydrogen Equipment",
              "id": "01.04.005",
              "level": "subsector",
              "parent_id": "01.04",
              "classification": "GIC",
              "since": "2025-11-11",
              "status": "active",
              "segments": [],
              "sector_id": "01.04",
              "industry_id": "01"
            }
          ],
          "industry_id": "01"
        }
      ]
    },
    {
      "label": "Basic Materials",
      "id": "02",
      "level": "industry",
      "parent_id": null,
      "classification": "GIC",
      "since": "2025-11-08",
      "status": "active",
      "sectors": [
        {
          "label": "Metals & Mining",
          "id": "02.01",
          "level": "sector",
          "parent_id": "02",
          "classification": "GIC",
          "since": "2025-11-08",
          "status": "active",
          "subsectors": [
            {
              "label": "Diversified Mining",
              "id": "02.01.001",
              "level": "subsector",
              "parent_id": "02.01",
              "classification": "GIC",
              "since": "2025-11-08",
              "status": "active",
              "segments": [],
              "sector_id": "02.01",
              "industry_id": "02"
            },
            {
              "label": "Precious Metals",
              "id": "02.01.002",
              "level": "subsector",
              "parent_id": "02.01",
              "classification": "GIC",
              "since": "2025-11-08",
              "status": "active",
              "segments": [],
              "sector_id": "02.01",
              "industry_id": "02"
            },
            {
              "label": "Steel & Ferrous",
              "id": "02.01.003",
              "level": "subsector",
              "parent_id": "02.01",
              "classification": "GIC",
              "since": "2025-11-08",
              "status": "active",
              "segments": [],
              "sector_id": "02.01",
              "industry_id": "02"
            },
            {
              "label": "Mining Services",
              "id": "02.01.004",
              "level": "subsector",
              "parent_id": "02.01",
              "classification": "GIC",
              "since": "2025-11-08",
              "status": "active",
              "segments": [],
              "sector_id": "02.01",
              "industry_id": "02"
            }
          ],
          "industry_id": "02"
        },
        {
          "label": "Chemicals & Fertilizers",
          "id": "02.02",
          "level": "sector",
          "parent_id": "02",
          "classification": "GIC",
          "since": "2025-11-08",
          "status": "active",
          "subsectors": [
            {
              "label": "Commodity Chemicals",
              "id": "02.02.001",
              "level": "subsector",
              "parent_id": "02.02",
              "classification": "GIC",
              "since": "2025-11-08",
              "status": "active",
              "segments": [],
              "sector_id": "02.02",
              "industry_id": "02"
            },
            {
              "label": "Specialty Chemicals",
              "id": "02.02.002",
              "level": "subsector",
              "parent_id": "02.02",
              "classification": "GIC",
              "since": "2025-11-08",
              "status": "active",
              "segments": [],
              "sector_id": "02.02",
              "industry_id": "02"
            },
            {
              "label": "Agrochemicals & Fertilizers",
              "id": "02.02.003",
              "level": "subsector",
              "parent_id": "02.02",
              "classification": "GIC",
              "since": "2025-11-08",
              "status": "active",
              "segments": [],
              "sector_id": "02.02",
              "industry_id": "02"
            }
          ],
          "industry_id": "02"
        },
        {
          "label": "Construction Materials",
          "id": "02.03",
          "level": "sector",
          "parent_id": "02",
          "classification": "GIC",
          "since": "2025-11-08",
          "status": "active",
          "subsectors": [
            {
              "label": "Cement & Aggregates",
              "id": "02.03.001",
              "level": "subsector",
              "parent_id": "02.03",
              "classification": "GIC",
              "since": "2025-11-08",
              "status": "active",
              "segments": [],
              "sector_id": "02.03",
              "industry_id": "02"
            },
            {
              "label": "Glass & Ceramics",
              "id": "02.03.002",
              "level": "subsector",
              "parent_id": "02.03",
              "classification": "GIC",
              "since": "2025-11-08",
              "status": "active",
              "segments": [],
              "sector_id": "02.03",
              "industry_id": "02"
            },
            {
              "label": "Asphalt & Paving",
              "id": "02.03.003",
              "level": "subsector",
              "parent_id": "02.03",
              "classification": "GIC",
              "since": "2025-11-08",
              "status": "active",
              "segments": [],
              "sector_id": "02.03",
              "industry_id": "02"
            }
          ],
          "industry_id": "02"
        },
        {
          "label": "Forestry, Paper & Packaging",
          "id": "02.04",
          "level": "sector",
          "parent_id": "02",
          "classification": "GIC",
          "since": "2025-11-08",
          "status": "active",
          "subsectors": [
            {
              "label": "Forestry & Timber",
              "id": "02.04.001",
              "level": "subsector",
              "parent_id": "02.04",
              "classification": "GIC",
              "since": "2025-11-08",
              "status": "active",
              "segments": [],
              "sector_id": "02.04",
              "industry_id": "02"
            },
            {
              "label": "Pulp & Paper",
              "id": "02.04.002",
              "level": "subsector",
              "parent_id": "02.04",
              "classification": "GIC",
              "since": "2025-11-08",
              "status": "active",
              "segments": [],
              "sector_id": "02.04",
              "industry_id": "02"
            },
            {
              "label": "Containers & Packaging",
              "id": "02.04.003",
              "level": "subsector",
              "parent_id": "02.04",
              "classification": "GIC",
              "since": "2025-11-08",
              "status": "active",
              "segments": [],
              "sector_id": "02.04",
              "industry_id": "02"
            }
          ],
          "industry_id": "02"
        }
      ]
    },
    {
      "label": "Industrials",
      "id": "03",
      "level": "industry",
      "parent_id": null,
      "classification": "GIC",
      "since": "2025-11-08",
      "status": "active",
      "sectors": [
        {
          "label": "Aerospace, Defense & Security",
          "id": "03.01",
          "level": "sector",
          "parent_id": "03",
          "classification": "GIC",
          "since": "2025-11-08",
          "status": "active",
          "subsectors": [
            {
              "label": "Aerospace OEMs",
              "id": "03.01.001",
              "level": "subsector",
              "parent_id": "03.01",
              "classification": "GIC",
              "since": "2025-11-08",
              "status": "active",
              "segments": [],
              "sector_id": "03.01",
              "industry_id": "03"
            },
            {
              "label": "Defense Systems",
              "id": "03.01.002",
              "level": "subsector",
              "parent_id": "03.01",
              "classification": "GIC",
              "since": "2025-11-08",
              "status": "active",
              "segments": [],
              "sector_id": "03.01",
              "industry_id": "03"
            },
            {
              "label": "Space & Launch Services",
              "id": "03.01.003",
              "level": "subsector",
              "parent_id": "03.01",
              "classification": "GIC",
              "since": "2025-11-08",
              "status": "active",
              "segments": [],
              "sector_id": "03.01",
              "industry_id": "03"
            }
          ],
          "industry_id": "03"
        },
        {
          "label": "Machinery & Industrial Equipment",
          "id": "03.02",
          "level": "sector",
          "parent_id": "03",
          "classification": "GIC",
          "since": "2025-11-08",
          "status": "active",
          "subsectors": [
            {
              "label": "Heavy Machinery",
              "id": "03.02.001",
              "level": "subsector",
              "parent_id": "03.02",
              "classification": "GIC",
              "since": "2025-11-08",
              "status": "active",
              "segments": [],
              "sector_id": "03.02",
              "industry_id": "03"
            },
            {
              "label": "Electrical Equipment",
              "id": "03.02.002",
              "level": "subsector",
              "parent_id": "03.02",
              "classification": "GIC",
              "since": "2025-11-08",
              "status": "active",
              "segments": [],
              "sector_id": "03.02",
              "industry_id": "03"
            },
            {
              "label": "Automation Components",
              "id": "03.02.003",
              "level": "subsector",
              "parent_id": "03.02",
              "classification": "GIC",
              "since": "2025-11-08",
              "status": "active",
              "segments": [],
              "sector_id": "03.02",
              "industry_id": "03"
            },
            {
              "label": "Diversified Industrials",
              "id": "03.02.004",
              "level": "subsector",
              "parent_id": "03.02",
              "classification": "GIC",
              "since": "2025-11-08",
              "status": "active",
              "segments": [],
              "sector_id": "03.02",
              "industry_id": "03"
            }
          ],
          "industry_id": "03"
        },
        {
          "label": "Transportation & Logistics",
          "id": "03.03",
          "level": "sector",
          "parent_id": "03",
          "classification": "GIC",
          "since": "2025-11-08",
          "status": "active",
          "subsectors": [
            {
              "label": "Rail & Transit",
              "id": "03.03.001",
              "level": "subsector",
              "parent_id": "03.03",
              "classification": "GIC",
              "since": "2025-11-08",
              "status": "active",
              "segments": [],
              "sector_id": "03.03",
              "industry_id": "03"
            },
            {
              "label": "Trucking & Haulage",
              "id": "03.03.002",
              "level": "subsector",
              "parent_id": "03.03",
              "classification": "GIC",
              "since": "2025-11-08",
              "status": "active",
              "segments": [],
              "sector_id": "03.03",
              "industry_id": "03"
            },
            {
              "label": "Air Freight & Cargo",
              "id": "03.03.003",
              "level": "subsector",
              "parent_id": "03.03",
              "classification": "GIC",
              "since": "2025-11-08",
              "status": "active",
              "segments": [],
              "sector_id": "03.03",
              "industry_id": "03"
            },
            {
              "label": "Parcel & Courier",
              "id": "03.03.004",
              "level": "subsector",
              "parent_id": "03.03",
              "classification": "GIC",
              "since": "2025-11-08",
              "status": "active",
              "segments": [],
              "sector_id": "03.03",
              "industry_id": "03"
            },
            {
              "label": "Airlines",
              "id": "03.03.005",
              "level": "subsector",
              "parent_id": "03.03",
              "classification": "GIC",
              "since": "2025-11-08",
              "status": "active",
              "segments": [],
              "sector_id": "03.03",
              "industry_id": "03"
            },
            {
              "label": "Container & Liner Shipping",
              "id": "03.03.006",
              "level": "subsector",
              "parent_id": "03.03",
              "classification": "GIC",
              "since": "2025-11-08",
              "status": "active",
              "segments": [],
              "sector_id": "03.03",
              "industry_id": "03"
            }
          ],
          "industry_id": "03"
        },
        {
          "label": "Engineering, Construction & Services",
          "id": "03.04",
          "level": "sector",
          "parent_id": "03",
          "classification": "GIC",
          "since": "2025-11-08",
          "status": "active",
          "subsectors": [
            {
              "label": "EPC & Infrastructure",
              "id": "03.04.001",
              "level": "subsector",
              "parent_id": "03.04",
              "classification": "GIC",
              "since": "2025-11-08",
              "status": "active",
              "segments": [],
              "sector_id": "03.04",
              "industry_id": "03"
            },
            {
              "label": "Commercial Contractors",
              "id": "03.04.002",
              "level": "subsector",
              "parent_id": "03.04",
              "classification": "GIC",
              "since": "2025-11-08",
              "status": "active",
              "segments": [],
              "sector_id": "03.04",
              "industry_id": "03"
            },
            {
              "label": "Facility & Support Services",
              "id": "03.04.003",
              "level": "subsector",
              "parent_id": "03.04",
              "classification": "GIC",
              "since": "2025-11-08",
              "status": "active",
              "segments": [],
              "sector_id": "03.04",
              "industry_id": "03"
            },
            {
              "label": "Industrial Maintenance & Services",
              "id": "03.04.004",
              "level": "subsector",
              "parent_id": "03.04",
              "classification": "GIC",
              "since": "2025-11-11",
              "status": "active",
              "segments": [],
              "sector_id": "03.04",
              "industry_id": "03"
            }
          ],
          "industry_id": "03"
        }
      ]
    },
    {
      "label": "Consumer Discretionary",
      "id": "04",
      "level": "industry",
      "parent_id": null,
      "classification": "GIC",
      "since": "2025-11-08",
      "status": "active",
      "sectors": [
        {
          "label": "Auto & Mobility",
          "id": "04.01",
          "level": "sector",
          "parent_id": "04",
          "classification": "GIC",
          "since": "2025-11-08",
          "status": "active",
          "subsectors": [
            {
              "label": "Automakers",
              "id": "04.01.001",
              "level": "subsector",
              "parent_id": "04.01",
              "classification": "GIC",
              "since": "2025-11-08",
              "status": "active",
              "segments": [],
              "sector_id": "04.01",
              "industry_id": "04"
            },
            {
              "label": "Auto Parts & Components",
              "id": "04.01.002",
              "level": "subsector",
              "parent_id": "04.01",
              "classification": "GIC",
              "since": "2025-11-08",
              "status": "active",
              "segments": [],
              "sector_id": "04.01",
              "industry_id": "04"
            },
            {
              "label": "EV & New Mobility",
              "id": "04.01.003",
              "level": "subsector",
              "parent_id": "04.01",
              "classification": "GIC",
              "since": "2025-11-08",
              "status": "active",
              "segments": [],
              "sector_id": "04.01",
              "industry_id": "04"
            }
          ],
          "industry_id": "04"
        },
        {
          "label": "Consumer Durables & Home",
          "id": "04.02",
          "level": "sector",
          "parent_id": "04",
          "classification": "GIC",
          "since": "2025-11-08",
          "status": "active",
          "subsectors": [
            {
              "label": "Home Appliances",
              "id": "04.02.001",
              "level": "subsector",
              "parent_id": "04.02",
              "classification": "GIC",
              "since": "2025-11-08",
              "status": "active",
              "segments": [],
              "sector_id": "04.02",
              "industry_id": "04"
            },
            {
              "label": "Furniture & Home Décor",
              "id": "04.02.002",
              "level": "subsector",
              "parent_id": "04.02",
              "classification": "GIC",
              "since": "2025-11-08",
              "status": "active",
              "segments": [],
              "sector_id": "04.02",
              "industry_id": "04"
            },
            {
              "label": "Consumer Electronics",
              "id": "04.02.003",
              "level": "subsector",
              "parent_id": "04.02",
              "classification": "GIC",
              "since": "2025-11-08",
              "status": "active",
              "segments": [],
              "sector_id": "04.02",
              "industry_id": "04"
            }
          ],
          "industry_id": "04"
        },
        {
          "label": "Apparel, Footwear & Luxury",
          "id": "04.03",
          "level": "sector",
          "parent_id": "04",
          "classification": "active",
          "since": "2025-11-08",
          "status": "active",
          "subsectors": [
            {
              "label": "Apparel Brands",
              "id": "04.03.001",
              "level": "subsector",
              "parent_id": "04.03",
              "classification": "GIC",
              "since": "2025-11-08",
              "status": "active",
              "segments": [],
              "sector_id": "04.03",
              "industry_id": "04"
            },
            {
              "label": "Sportswear & Footwear",
              "id": "04.03.002",
              "level": "subsector",
              "parent_id": "04.03",
              "classification": "GIC",
              "since": "2025-11-08",
              "status": "active",
              "segments": [],
              "sector_id": "04.03",
              "industry_id": "04"
            },
            {
              "label": "Luxury Goods",
              "id": "04.03.003",
              "level": "subsector",
              "parent_id": "04.03",
              "classification": "GIC",
              "since": "2025-11-08",
              "status": "active",
              "segments": [],
              "sector_id": "04.03",
              "industry_id": "04"
            }
          ],
          "industry_id": "04"
        },
        {
          "label": "Leisure, Travel & Entertainment",
          "id": "04.04",
          "level": "sector",
          "parent_id": "04",
          "classification": "active",
          "since": "2025-11-08",
          "status": "active",
          "subsectors": [
            {
              "label": "Hotels & Resorts",
              "id": "04.04.001",
              "level": "subsector",
              "parent_id": "04.04",
              "classification": "GIC",
              "since": "2025-11-08",
              "status": "active",
              "segments": [],
              "sector_id": "04.04",
              "industry_id": "04"
            },
            {
              "label": "Travel Services",
              "id": "04.04.002",
              "level": "subsector",
              "parent_id": "04.04",
              "classification": "GIC",
              "since": "2025-11-08",
              "status": "active",
              "segments": [],
              "sector_id": "04.04",
              "industry_id": "04"
            },
            {
              "label": "Gaming & Casinos",
              "id": "04.04.003",
              "level": "subsector",
              "parent_id": "04.04",
              "classification": "GIC",
              "since": "2025-11-08",
              "status": "active",
              "segments": [],
              "sector_id": "04.04",
              "industry_id": "04"
            },
            {
              "label": "Experience & Ticketing Platforms",
              "id": "04.04.004",
              "level": "subsector",
              "parent_id": "04.04",
              "classification": "GIC",
              "since": "2025-11-08",
              "status": "active",
              "segments": [],
              "sector_id": "04.04",
              "industry_id": "04"
            }
          ],
          "industry_id": "04"
        },
        {
          "label": "Retail & E-Commerce",
          "id": "04.05",
          "level": "sector",
          "parent_id": "04",
          "classification": "GIC",
          "since": "2025-11-08",
          "status": "active",
          "subsectors": [
            {
              "label": "Multiline Retail",
              "id": "04.05.001",
              "level": "subsector",
              "parent_id": "04.05",
              "classification": "GIC",
              "since": "2025-11-08",
              "status": "active",
              "segments": [],
              "sector_id": "04.05",
              "industry_id": "04"
            },
            {
              "label": "Online Marketplaces",
              "id": "04.05.002",
              "level": "subsector",
              "parent_id": "04.05",
              "classification": "GIC",
              "since": "2025-11-08",
              "status": "active",
              "segments": [],
              "sector_id": "04.05",
              "industry_id": "04"
            },
            {
              "label": "Specialty Retail",
              "id": "04.05.003",
              "level": "subsector",
              "parent_id": "04.05",
              "classification": "GIC",
              "since": "2025-11-08",
              "status": "active",
              "segments": [],
              "sector_id": "04.05",
              "industry_id": "04"
            }
          ],
          "industry_id": "04"
        },
        {
          "label": "Restaurants & Food Service",
          "id": "04.06",
          "level": "sector",
          "parent_id": "04",
          "classification": "GIC",
          "since": "2025-11-08",
          "status": "active",
          "subsectors": [
            {
              "label": "Quick Service Restaurants",
              "id": "04.06.001",
              "level": "subsector",
              "parent_id": "04.06",
              "classification": "GIC",
              "since": "2025-11-08",
              "status": "active",
              "segments": [],
              "sector_id": "04.06",
              "industry_id": "04"
            },
            {
              "label": "Casual / Full-Service",
              "id": "04.06.002",
              "level": "subsector",
              "parent_id": "04.06",
              "classification": "GIC",
              "since": "2025-11-08",
              "status": "active",
              "segments": [],
              "sector_id": "04.06",
              "industry_id": "04"
            },
            {
              "label": "Foodservice Franchising",
              "id": "04.06.003",
              "level": "subsector",
              "parent_id": "04.06",
              "classification": "GIC",
              "since": "2025-11-08",
              "status": "active",
              "segments": [],
              "sector_id": "04.06",
              "industry_id": "04"
            }
          ],
          "industry_id": "04"
        },
        {
          "label": "Mobility Platforms",
          "id": "04.07",
          "level": "sector",
          "parent_id": "04",
          "classification": "GIC",
          "since": "2025-11-08",
          "status": "active",
          "subsectors": [
            {
              "label": "Ridehailing & Delivery Platforms",
              "id": "04.07.001",
              "level": "subsector",
              "parent_id": "04.07",
              "classification": "GIC",
              "since": "2025-11-08",
              "status": "active",
              "segments": [],
              "sector_id": "04.07",
              "industry_id": "04"
            },
            {
              "label": "Mobility Marketplaces",
              "id": "04.07.002",
              "level": "subsector",
              "parent_id": "04.07",
              "classification": "GIC",
              "since": "2025-11-08",
              "status": "active",
              "segments": [],
              "sector_id": "04.07",
              "industry_id": "04"
            },
            {
              "label": "Last-Mile Delivery Platforms",
              "id": "04.07.003",
              "level": "subsector",
              "parent_id": "04.07",
              "classification": "GIC",
              "since": "2025-11-08",
              "status": "active",
              "segments": [],
              "sector_id": "04.07",
              "industry_id": "04"
            }
          ],
          "industry_id": "04"
        }
      ]
    },
    {
      "label": "Consumer Staples",
      "id": "05",
      "level": "industry",
      "parent_id": null,
      "classification": "GIC",
      "since": "2025-11-08",
      "status": "active",
      "sectors": [
        {
          "label": "Food & Beverage Producers",
          "id": "05.01",
          "level": "sector",
          "parent_id": "05",
          "classification": "GIC",
          "since": "2025-11-08",
          "status": "active",
          "subsectors": [
            {
              "label": "Packaged Foods",
              "id": "05.01.001",
              "level": "subsector",
              "parent_id": "05.01",
              "classification": "GIC",
              "since": "2025-11-08",
              "status": "active",
              "segments": [],
              "sector_id": "05.01",
              "industry_id": "05"
            },
            {
              "label": "Beverages & Brewers",
              "id": "05.01.002",
              "level": "subsector",
              "parent_id": "05.01",
              "classification": "GIC",
              "since": "2025-11-08",
              "status": "active",
              "segments": [],
              "sector_id": "05.01",
              "industry_id": "05"
            },
            {
              "label": "Meat & Protein",
              "id": "05.01.003",
              "level": "subsector",
              "parent_id": "05.01",
              "classification": "GIC",
              "since": "2025-11-08",
              "status": "active",
              "segments": [],
              "sector_id": "05.01",
              "industry_id": "05"
            },
            {
              "label": "Snacks & Confectionery",
              "id": "05.01.004",
              "level": "subsector",
              "parent_id": "05.01",
              "classification": "GIC",
              "since": "2025-11-08",
              "status": "active",
              "segments": [],
              "sector_id": "05.01",
              "industry_id": "05"
            }
          ],
          "industry_id": "05"
        },
        {
          "label": "Household & Personal Care",
          "id": "05.02",
          "level": "sector",
          "parent_id": "05",
          "classification": "GIC",
          "since": "2025-11-08",
          "status": "active",
          "subsectors": [
            {
              "label": "Household Products",
              "id": "05.02.001",
              "level": "subsector",
              "parent_id": "05.02",
              "classification": "GIC",
              "since": "2025-11-08",
              "status": "active",
              "segments": [],
              "sector_id": "05.02",
              "industry_id": "05"
            },
            {
              "label": "Personal Care & Beauty",
              "id": "05.02.002",
              "level": "subsector",
              "parent_id": "05.02",
              "classification": "GIC",
              "since": "2025-11-08",
              "status": "active",
              "segments": [],
              "sector_id": "05.02",
              "industry_id": "05"
            }
          ],
          "industry_id": "05"
        },
        {
          "label": "Staples Retail",
          "id": "05.03",
          "level": "sector",
          "parent_id": "05",
          "classification": "GIC",
          "since": "2025-11-08",
          "status": "active",
          "subsectors": [
            {
              "label": "Supermarkets & Hypermarkets",
              "id": "05.03.001",
              "level": "subsector",
              "parent_id": "05.03",
              "classification": "GIC",
              "since": "2025-11-08",
              "status": "active",
              "segments": [],
              "sector_id": "05.03",
              "industry_id": "05"
            },
            {
              "label": "Discount & Club Stores",
              "id": "05.03.002",
              "level": "subsector",
              "parent_id": "05.03",
              "classification": "GIC",
              "since": "2025-11-08",
              "status": "active",
              "segments": [],
              "sector_id": "05.03",
              "industry_id": "05"
            },
            {
              "label": "Convenience & Drug Retail",
              "id": "05.03.003",
              "level": "subsector",
              "parent_id": "05.03",
              "classification": "GIC",
              "since": "2025-11-08",
              "status": "active",
              "segments": [
                {
                  "label": "Specialty Tobacco & Vape Retail",
                  "id": "05.03.003.01",
                  "level": "segment",
                  "parent_id": "05.03.003",
                  "classification": "GIC",
                  "since": "2025-11-12",
                  "status": "active",
                  "segment_code": "01",
                  "subsector_id": "05.03.003",
                  "sector_id": "05.03",
                  "industry_id": "05"
                }
              ],
              "sector_id": "05.03",
              "industry_id": "05"
            }
          ],
          "industry_id": "05"
        },
        {
          "label": "Agriculture & Food Supply",
          "id": "05.04",
          "level": "sector",
          "parent_id": "05",
          "classification": "GIC",
          "since": "2025-11-08",
          "status": "active",
          "subsectors": [
            {
              "label": "Agri Processing",
              "id": "05.04.001",
              "level": "subsector",
              "parent_id": "05.04",
              "classification": "GIC",
              "since": "2025-11-08",
              "status": "active",
              "segments": [],
              "sector_id": "05.04",
              "industry_id": "05"
            },
            {
              "label": "Farm & Produce",
              "id": "05.04.002",
              "level": "subsector",
              "parent_id": "05.04",
              "classification": "GIC",
              "since": "2025-11-08",
              "status": "active",
              "segments": [],
              "sector_id": "05.04",
              "industry_id": "05"
            }
          ],
          "industry_id": "05"
        },
        {
          "label": "Tobacco & Cannabinoid Products",
          "id": "05.05",
          "level": "sector",
          "parent_id": "05",
          "classification": "GIC",
          "since": "2025-11-12",
          "status": "active",
          "subsectors": [
            {
              "label": "Combustible Tobacco",
              "id": "05.05.001",
              "level": "subsector",
              "parent_id": "05.05",
              "classification": "GIC",
              "since": "2025-11-12",
              "status": "active",
              "segments": [],
              "sector_id": "05.05",
              "industry_id": "05"
            },
            {
              "label": "Reduced-Risk Nicotine (Heated & Vapor)",
              "id": "05.05.002",
              "level": "subsector",
              "parent_id": "05.05",
              "classification": "GIC",
              "since": "2025-11-12",
              "status": "active",
              "segments": [
                {
                  "label": "Heated Tobacco Systems",
                  "id": "05.05.002.01",
                  "level": "segment",
                  "parent_id": "05.05.002",
                  "classification": "GIC",
                  "since": "2025-11-12",
                  "status": "active",
                  "segment_code": "01",
                  "subsector_id": "05.05.002",
                  "sector_id": "05.05",
                  "industry_id": "05"
                },
                {
                  "label": "Closed-Pod Vapor",
                  "id": "05.05.002.02",
                  "level": "segment",
                  "parent_id": "05.05.002",
                  "classification": "GIC",
                  "since": "2025-11-12",
                  "status": "active",
                  "segment_code": "02",
                  "subsector_id": "05.05.002",
                  "sector_id": "05.05",
                  "industry_id": "05"
                },
                {
                  "label": "Open-System Vapor",
                  "id": "05.05.002.03",
                  "level": "segment",
                  "parent_id": "05.05.002",
                  "classification": "GIC",
                  "since": "2025-11-12",
                  "status": "active",
                  "segment_code": "03",
                  "subsector_id": "05.05.002",
                  "sector_id": "05.05",
                  "industry_id": "05"
                }
              ],
              "sector_id": "05.05",
              "industry_id": "05"
            },
            {
              "label": "Smokeless & Oral Nicotine",
              "id": "05.05.003",
              "level": "subsector",
              "parent_id": "05.05",
              "classification": "GIC",
              "since": "2025-11-12",
              "status": "active",
              "segments": [],
              "sector_id": "05.05",
              "industry_id": "05"
            },
            {
              "label": "Vertically-Integrated Cannabis (MSOs)",
              "id": "05.05.004",
              "level": "subsector",
              "parent_id": "05.05",
              "classification": "GIC",
              "since": "2025-11-12",
              "status": "active",
              "segments": [],
              "sector_id": "05.05",
              "industry_id": "05"
            },
            {
              "label": "Cannabis Products, Brands & Wellness",
              "id": "05.05.005",
              "level": "subsector",
              "parent_id": "05.05",
              "classification": "GIC",
              "since": "2025-11-12",
              "status": "active",
              "segments": [],
              "sector_id": "05.05",
              "industry_id": "05"
            },
            {
              "label": "Cannabis Cultivation & Supply Chain",
              "id": "05.05.006",
              "level": "subsector",
              "parent_id": "05.05",
              "classification": "GIC",
              "since": "2025-11-12",
              "status": "active",
              "segments": [
                {
                  "label": "Cultivation",
                  "id": "05.05.006.01",
                  "level": "segment",
                  "parent_id": "05.05.006",
                  "classification": "GIC",
                  "since": "2025-11-12",
                  "status": "active",
                  "segment_code": "01",
                  "subsector_id": "05.05.006",
                  "sector_id": "05.05",
                  "industry_id": "05"
                },
                {
                  "label": "Extraction/Processing",
                  "id": "05.05.006.02",
                  "level": "segment",
                  "parent_id": "05.05.006",
                  "classification": "GIC",
                  "since": "2025-11-12",
                  "status": "active",
                  "segment_code": "02",
                  "subsector_id": "05.05.006",
                  "sector_id": "05.05",
                  "industry_id": "05"
                },
                {
                  "label": "Brand & Wholesale",
                  "id": "05.05.006.03",
                  "level": "segment",
                  "parent_id": "05.05.006",
                  "classification": "GIC",
                  "since": "2025-11-12",
                  "status": "active",
                  "segment_code": "03",
                  "subsector_id": "05.05.006",
                  "sector_id": "05.05",
                  "industry_id": "05"
                }
              ],
              "sector_id": "05.05",
              "industry_id": "05"
            },
            {
              "label": "Devices & Accessories (Integrated)",
              "id": "05.05.007",
              "level": "subsector",
              "parent_id": "05.05",
              "classification": "GIC",
              "since": "2025-11-12",
              "status": "active",
              "segments": [],
              "sector_id": "05.05",
              "industry_id": "05"
            }
          ],
          "industry_id": "05"
        }
      ]
    },
    {
      "label": "Healthcare",
      "id": "06",
      "level": "industry",
      "parent_id": null,
      "classification": "GIC",
      "since": "2025-11-08",
      "status": "active",
      "sectors": [
        {
          "label": "Pharma & Biotech",
          "id": "06.01",
          "level": "sector",
          "parent_id": "06",
          "classification": "GIC",
          "since": "2025-11-08",
          "status": "active",
          "subsectors": [
            {
              "label": "Branded Pharma",
              "id": "06.01.001",
              "level": "subsector",
              "parent_id": "06.01",
              "classification": "GIC",
              "since": "2025-11-08",
              "status": "active",
              "segments": [],
              "sector_id": "06.01",
              "industry_id": "06"
            },
            {
              "label": "Generics & Biosimilars",
              "id": "06.01.002",
              "level": "subsector",
              "parent_id": "06.01",
              "classification": "GIC",
              "since": "2025-11-08",
              "status": "active",
              "segments": [],
              "sector_id": "06.01",
              "industry_id": "06"
            },
            {
              "label": "Biotech & Cell/Gene",
              "id": "06.01.003",
              "level": "subsector",
              "parent_id": "06.01",
              "classification": "GIC",
              "since": "2025-11-08",
              "status": "active",
              "segments": [
                {
                  "label": "General Biotech",
                  "id": "06.01.003.01",
                  "level": "segment",
                  "parent_id": "06.01.003",
                  "classification": "GIC",
                  "since": "2025-11-12",
                  "status": "active",
                  "segment_code": "01",
                  "subsector_id": "06.01.003",
                  "sector_id": "06.01",
                  "industry_id": "06"
                },
                {
                  "label": "Cell & Gene Therapy",
                  "id": "06.01.003.02",
                  "level": "segment",
                  "parent_id": "06.01.003",
                  "classification": "GIC",
                  "since": "2025-11-12",
                  "status": "active",
                  "segment_code": "02",
                  "subsector_id": "06.01.003",
                  "sector_id": "06.01",
                  "industry_id": "06"
                },
                {
                  "label": "Genomics & Precision Medicine",
                  "id": "06.01.003.03",
                  "level": "segment",
                  "parent_id": "06.01.003",
                  "classification": "GIC",
                  "since": "2025-11-12",
                  "status": "active",
                  "segment_code": "03",
                  "subsector_id": "06.01.003",
                  "sector_id": "06.01",
                  "industry_id": "06"
                },
                {
                  "label": "Longevity & Anti-Aging",
                  "id": "06.01.003.04",
                  "level": "segment",
                  "parent_id": "06.01.003",
                  "classification": "GIC",
                  "since": "2025-11-12",
                  "status": "active",
                  "segment_code": "04",
                  "subsector_id": "06.01.003",
                  "sector_id": "06.01",
                  "industry_id": "06"
                }
              ],
              "sector_id": "06.01",
              "industry_id": "06"
            },
            {
              "label": "Diversified Healthcare",
              "id": "06.01.004",
              "level": "subsector",
              "parent_id": "06.01",
              "classification": "GIC",
              "since": "2025-11-08",
              "status": "active",
              "segments": [],
              "sector_id": "06.01",
              "industry_id": "06"
            }
          ],
          "industry_id": "06"
        },
        {
          "label": "Medical Devices & Supplies",
          "id": "06.02",
          "level": "sector",
          "parent_id": "06",
          "classification": "GIC",
          "since": "2025-11-08",
          "status": "active",
          "subsectors": [
            {
              "label": "Diagnostic Devices",
              "id": "06.02.001",
              "level": "subsector",
              "parent_id": "06.02",
              "classification": "GIC",
              "since": "2025-11-08",
              "status": "active",
              "segments": [],
              "sector_id": "06.02",
              "industry_id": "06"
            },
            {
              "label": "Surgical & Ortho",
              "id": "06.02.002",
              "level": "subsector",
              "parent_id": "06.02",
              "classification": "GIC",
              "since": "2025-11-08",
              "status": "active",
              "segments": [],
              "sector_id": "06.02",
              "industry_id": "06"
            },
            {
              "label": "Consumables & Supplies",
              "id": "06.02.003",
              "level": "subsector",
              "parent_id": "06.02",
              "classification": "GIC",
              "since": "2025-11-08",
              "status": "active",
              "segments": [],
              "sector_id": "06.02",
              "industry_id": "06"
            }
          ],
          "industry_id": "06"
        },
        {
          "label": "Healthcare Providers & Services",
          "id": "06.03",
          "level": "sector",
          "parent_id": "06",
          "classification": "GIC",
          "since": "2025-11-08",
          "status": "active",
          "subsectors": [
            {
              "label": "Hospitals & Clinics",
              "id": "06.03.001",
              "level": "subsector",
              "parent_id": "06.03",
              "classification": "GIC",
              "since": "2025-11-08",
              "status": "active",
              "segments": [],
              "sector_id": "06.03",
              "industry_id": "06"
            },
            {
              "label": "Managed Care & Payers",
              "id": "06.03.002",
              "level": "subsector",
              "parent_id": "06.03",
              "classification": "GIC",
              "since": "2025-11-08",
              "status": "active",
              "segments": [],
              "sector_id": "06.03",
              "industry_id": "06"
            },
            {
              "label": "Labs & Imaging",
              "id": "06.03.003",
              "level": "subsector",
              "parent_id": "06.03",
              "classification": "GIC",
              "since": "2025-11-08",
              "status": "active",
              "segments": [],
              "sector_id": "06.03",
              "industry_id": "06"
            }
          ],
          "industry_id": "06"
        },
        {
          "label": "Health Tech & Digital Care",
          "id": "06.04",
          "level": "sector",
          "parent_id": "06",
          "classification": "GIC",
          "since": "2025-11-08",
          "status": "active",
          "subsectors": [
            {
              "label": "Telehealth Platforms",
              "id": "06.04.001",
              "level": "subsector",
              "parent_id": "06.04",
              "classification": "GIC",
              "since": "2025-11-08",
              "status": "active",
              "segments": [],
              "sector_id": "06.04",
              "industry_id": "06"
            },
            {
              "label": "Healthcare Data & Analytics",
              "id": "06.04.002",
              "level": "subsector",
              "parent_id": "06.04",
              "classification": "GIC",
              "since": "2025-11-08",
              "status": "active",
              "segments": [],
              "sector_id": "06.04",
              "industry_id": "06"
            },
            {
              "label": "Clinical Data & RWE Platforms",
              "id": "06.04.003",
              "level": "subsector",
              "parent_id": "06.04",
              "classification": "GIC",
              "since": "2025-11-08",
              "status": "active",
              "segments": [],
              "sector_id": "06.04",
              "industry_id": "06"
            },
            {
              "label": "Revenue Cycle / Admin Tech",
              "id": "06.04.004",
              "level": "subsector",
              "parent_id": "06.04",
              "classification": "GIC",
              "since": "2025-11-08",
              "status": "active",
              "segments": [],
              "sector_id": "06.04",
              "industry_id": "06"
            }
          ],
          "industry_id": "06"
        },
        {
          "label": "Life Sciences Tools & Services",
          "id": "06.05",
          "level": "sector",
          "parent_id": "06",
          "classification": "GIC",
          "since": "2025-11-11",
          "status": "active",
          "subsectors": [
            {
              "label": "Life Sciences Equipment & Consumables",
              "id": "06.05.001",
              "level": "subsector",
              "parent_id": "06.05",
              "classification": "GIC",
              "since": "2025-11-11",
              "status": "active",
              "segments": [
                {
                  "label": "Analytical Instruments & Equipment",
                  "id": "06.05.001.01",
                  "level": "segment",
                  "parent_id": "06.05.001",
                  "classification": "GIC",
                  "since": "2025-11-11",
                  "status": "active",
                  "segment_code": "01",
                  "subsector_id": "06.05.001",
                  "sector_id": "06.05",
                  "industry_id": "06"
                },
                {
                  "label": "Life Sciences Consumables & Reagents",
                  "id": "06.05.001.02",
                  "level": "segment",
                  "parent_id": "06.05.001",
                  "classification": "GIC",
                  "since": "2025-11-11",
                  "status": "active",
                  "segment_code": "02",
                  "subsector_id": "06.05.001",
                  "sector_id": "06.05",
                  "industry_id": "06"
                }
              ],
              "sector_id": "06.05",
              "industry_id": "06"
            },
            {
              "label": "Contract Research & Manufacturing",
              "id": "06.05.002",
              "level": "subsector",
              "parent_id": "06.05",
              "classification": "GIC",
              "since": "2025-11-11",
              "status": "active",
              "segments": [
                {
                  "label": "Contract Research Organizations (CROs)",
                  "id": "06.05.002.01",
                  "level": "segment",
                  "parent_id": "06.05.002",
                  "classification": "GIC",
                  "since": "2025-11-11",
                  "status": "active",
                  "segment_code": "01",
                  "subsector_id": "06.05.002",
                  "sector_id": "06.05",
                  "industry_id": "06"
                },
                {
                  "label": "Contract Development & Manufacturing (CDMOs)",
                  "id": "06.05.002.02",
                  "level": "segment",
                  "parent_id": "06.05.002",
                  "classification": "GIC",
                  "since": "2025-11-11",
                  "status": "active",
                  "segment_code": "02",
                  "subsector_id": "06.05.002",
                  "sector_id": "06.05",
                  "industry_id": "06"
                }
              ],
              "sector_id": "06.05",
              "industry_id": "06"
            }
          ],
          "industry_id": "06"
        }
      ]
    },
    {
      "label": "Financial Services",
      "id": "07",
      "level": "industry",
      "parent_id": null,
      "classification": "GIC",
      "since": "2025-11-08",
      "status": "active",
      "sectors": [
        {
          "label": "Banking & Lending",
          "id": "07.01",
          "level": "sector",
          "parent_id": "07",
          "classification": "GIC",
          "since": "2025-11-08",
          "status": "active",
          "subsectors": [
            {
              "label": "Retail Banking",
              "id": "07.01.001",
              "level": "subsector",
              "parent_id": "07.01",
              "classification": "GIC",
              "since": "2025-11-08",
              "status": "active",
              "segments": [],
              "sector_id": "07.01",
              "industry_id": "07"
            },
            {
              "label": "Commercial / SME Lending",
              "id": "07.01.002",
              "level": "subsector",
              "parent_id": "07.01",
              "classification": "GIC",
              "since": "2025-11-08",
              "status": "active",
              "segments": [],
              "sector_id": "07.01",
              "industry_id": "07"
            },
            {
              "label": "Consumer Finance / Cards",
              "id": "07.01.003",
              "level": "subsector",
              "parent_id": "07.01",
              "classification": "GIC",
              "since": "2025-11-08",
              "status": "active",
              "segments": [],
              "sector_id": "07.01",
              "industry_id": "07"
            },
            {
              "label": "Embedded / BaaS Lending",
              "id": "07.01.004",
              "level": "subsector",
              "parent_id": "07.01",
              "classification": "GIC",
              "since": "2025-11-08",
              "status": "active",
              "segments": [],
              "sector_id": "07.01",
              "industry_id": "07"
            }
          ],
          "industry_id": "07"
        },
        {
          "label": "Insurance",
          "id": "07.02",
          "level": "sector",
          "parent_id": "07",
          "classification": "GIC",
          "since": "2025-11-08",
          "status": "active",
          "subsectors": [
            {
              "label": "Life & Health Insurance",
              "id": "07.02.001",
              "level": "subsector",
              "parent_id": "07.02",
              "classification": "GIC",
              "since": "2025-11-08",
              "status": "active",
              "segments": [],
              "sector_id": "07.02",
              "industry_id": "07"
            },
            {
              "label": "Property & Casualty",
              "id": "07.02.002",
              "level": "subsector",
              "parent_id": "07.02",
              "classification": "GIC",
              "since": "2025-11-08",
              "status": "active",
              "segments": [],
              "sector_id": "07.02",
              "industry_id": "07"
            },
            {
              "label": "Reinsurance & Specialty",
              "id": "07.02.003",
              "level": "subsector",
              "parent_id": "07.02",
              "classification": "GIC",
              "since": "2025-11-08",
              "status": "active",
              "segments": [],
              "sector_id": "07.02",
              "industry_id": "07"
            },
            {
              "label": "Digital Carriers & MGAs",
              "id": "07.02.004",
              "level": "subsector",
              "parent_id": "07.02",
              "classification": "GIC",
              "since": "2025-11-11",
              "status": "active",
              "segments": [],
              "sector_id": "07.02",
              "industry_id": "07"
            }
          ],
          "industry_id": "07"
        },
        {
          "label": "Investment & Capital Markets",
          "id": "07.03",
          "level": "sector",
          "parent_id": "07",
          "classification": "GIC",
          "since": "2025-11-08",
          "status": "active",
          "subsectors": [
            {
              "label": "Asset & Wealth Management",
              "id": "07.03.001",
              "level": "subsector",
              "parent_id": "07.03",
              "classification": "GIC",
              "since": "2025-11-08",
              "status": "active",
              "segments": [],
              "sector_id": "07.03",
              "industry_id": "07"
            },
            {
              "label": "Brokerage & Trading Venues",
              "id": "07.03.002",
              "level": "subsector",
              "parent_id": "07.03",
              "classification": "GIC",
              "since": "2025-11-08",
              "status": "active",
              "segments": [],
              "sector_id": "07.03",
              "industry_id": "07"
            },
            {
              "label": "Investment Banking",
              "id": "07.03.003",
              "level": "subsector",
              "parent_id": "07.03",
              "classification": "GIC",
              "since": "2025-11-08",
              "status": "active",
              "segments": [],
              "sector_id": "07.03",
              "industry_id": "07"
            },
            {
              "label": "Holding / Investment Companies",
              "id": "07.03.004",
              "level": "subsector",
              "parent_id": "07.03",
              "classification": "GIC",
              "since": "2025-11-08",
              "status": "active",
              "segments": [],
              "sector_id": "07.03",
              "industry_id": "07"
            },
            {
              "label": "Digital Wealth / Robo",
              "id": "07.03.005",
              "level": "subsector",
              "parent_id": "07.03",
              "classification": "GIC",
              "since": "2025-11-08",
              "status": "active",
              "segments": [],
              "sector_id": "07.03",
              "industry_id": "07"
            },
            {
              "label": "Carbon Exchanges",
              "id": "07.03.006",
              "level": "subsector",
              "parent_id": "07.03",
              "classification": "GIC",
              "since": "2025-11-12",
              "status": "active",
              "segments": [],
              "sector_id": "07.03",
              "industry_id": "07"
            },
            {
              "label": "ESG Data Platforms",
              "id": "07.03.007",
              "level": "subsector",
              "parent_id": "07.03",
              "classification": "GIC",
              "since": "2025-11-12",
              "status": "active",
              "segments": [],
              "sector_id": "07.03",
              "industry_id": "07"
            }
          ],
          "industry_id": "07"
        },
        {
          "label": "FinTech & Payments",
          "id": "07.04",
          "level": "sector",
          "parent_id": "07",
          "classification": "GIC",
          "since": "2025-11-08",
          "status": "active",
          "subsectors": [
            {
              "label": "Payment Networks",
              "id": "07.04.001",
              "level": "subsector",
              "parent_id": "07.04",
              "classification": "GIC",
              "since": "2025-11-08",
              "status": "active",
              "segments": [],
              "sector_id": "07.04",
              "industry_id": "07"
            },
            {
              "label": "Digital Wallets / Neobanks",
              "id": "07.04.002",
              "level": "subsector",
              "parent_id": "07.04",
              "classification": "GIC",
              "since": "2025-11-08",
              "status": "active",
              "segments": [],
              "sector_id": "07.04",
              "industry_id": "07"
            },
            {
              "label": "Merchant Acquiring",
              "id": "07.04.003",
              "level": "subsector",
              "parent_id": "07.04",
              "classification": "GIC",
              "since": "2025-11-08",
              "status": "active",
              "segments": [],
              "sector_id": "07.04",
              "industry_id": "07"
            },
            {
              "label": "Digital Payments",
              "id": "07.04.004",
              "level": "subsector",
              "parent_id": "07.04",
              "classification": "GIC",
              "since": "2025-11-08",
              "status": "active",
              "segments": [],
              "sector_id": "07.04",
              "industry_id": "07"
            },
            {
              "label": "Issuer / Wallet Infrastructure",
              "id": "07.04.005",
              "level": "subsector",
              "parent_id": "07.04",
              "classification": "GIC",
              "since": "2025-11-08",
              "status": "active",
              "segments": [],
              "sector_id": "07.04",
              "industry_id": "07"
            }
          ],
          "industry_id": "07"
        }
      ]
    },
    {
      "label": "Real Estate",
      "id": "08",
      "level": "industry",
      "parent_id": null,
      "classification": "GIC",
      "since": "2025-11-08",
      "status": "active",
      "sectors": [
        {
          "label": "Listed & Nonlisted REITs",
          "id": "08.01",
          "level": "sector",
          "parent_id": "08",
          "classification": "GIC",
          "since": "2025-11-08",
          "status": "active",
          "subsectors": [
            {
              "label": "Office REITs",
              "id": "08.01.001",
              "level": "subsector",
              "parent_id": "08.01",
              "classification": "GIC",
              "since": "2025-11-08",
              "status": "active",
              "segments": [],
              "sector_id": "08.01",
              "industry_id": "08"
            },
            {
              "label": "Retail REITs",
              "id": "08.01.002",
              "level": "subsector",
              "parent_id": "08.01",
              "classification": "GIC",
              "since": "2025-11-08",
              "status": "active",
              "segments": [],
              "sector_id": "08.01",
              "industry_id": "08"
            },
            {
              "label": "Industrial / Logistics REITs",
              "id": "08.01.003",
              "level": "subsector",
              "parent_id": "08.01",
              "classification": "GIC",
              "since": "2025-11-08",
              "status": "active",
              "segments": [],
              "sector_id": "08.01",
              "industry_id": "08"
            },
            {
              "label": "Residential REITs",
              "id": "08.01.004",
              "level": "subsector",
              "parent_id": "08.01",
              "classification": "GIC",
              "since": "2025-11-08",
              "status": "active",
              "segments": [],
              "sector_id": "08.01",
              "industry_id": "08"
            }
          ],
          "industry_id": "08"
        },
        {
          "label": "Real Estate Development",
          "id": "08.02",
          "level": "sector",
          "parent_id": "08",
          "classification": "GIC",
          "since": "2025-11-08",
          "status": "active",
          "subsectors": [
            {
              "label": "Residential Development",
              "id": "08.02.001",
              "level": "subsector",
              "parent_id": "08.02",
              "classification": "GIC",
              "since": "2025-11-08",
              "status": "active",
              "segments": [],
              "sector_id": "08.02",
              "industry_id": "08"
            },
            {
              "label": "Commercial Development",
              "id": "08.02.002",
              "level": "subsector",
              "parent_id": "08.02",
              "classification": "GIC",
              "since": "2025-11-08",
              "status": "active",
              "segments": [],
              "sector_id": "08.02",
              "industry_id": "08"
            },
            {
              "label": "Mixed-Use Projects",
              "id": "08.02.003",
              "level": "subsector",
              "parent_id": "08.02",
              "classification": "GIC",
              "since": "2025-11-08",
              "status": "active",
              "segments": [],
              "sector_id": "08.02",
              "industry_id": "08"
            }
          ],
          "industry_id": "08"
        },
        {
          "label": "Real Estate Services",
          "id": "08.03",
          "level": "sector",
          "parent_id": "08",
          "classification": "GIC",
          "since": "2025-11-08",
          "status": "active",
          "subsectors": [
            {
              "label": "Brokerage & Advisory",
              "id": "08.03.001",
              "level": "subsector",
              "parent_id": "08.03",
              "classification": "GIC",
              "since": "2025-11-08",
              "status": "active",
              "segments": [],
              "sector_id": "08.03",
              "industry_id": "08"
            },
            {
              "label": "Property Management",
              "id": "08.03.002",
              "level": "subsector",
              "parent_id": "08.03",
              "classification": "GIC",
              "since": "2025-11-08",
              "status": "active",
              "segments": [],
              "sector_id": "08.03",
              "industry_id": "08"
            },
            {
              "label": "Facilities & Property Operations",
              "id": "08.03.003",
              "level": "subsector",
              "parent_id": "08.03",
              "classification": "GIC",
              "since": "2025-11-08",
              "status": "active",
              "segments": [],
              "sector_id": "08.03",
              "industry_id": "08"
            },
            {
              "label": "PropTech & Real Estate Platforms",
              "id": "08.03.004",
              "level": "subsector",
              "parent_id": "08.03",
              "classification": "GIC",
              "since": "2025-11-11",
              "status": "active",
              "segments": [
                {
                  "label": "Residential Platforms & Marketplaces",
                  "id": "08.03.004.01",
                  "level": "segment",
                  "parent_id": "08.03.004",
                  "classification": "GIC",
                  "since": "2025-11-11",
                  "status": "active",
                  "segment_code": "01",
                  "subsector_id": "08.03.004",
                  "sector_id": "08.03",
                  "industry_id": "08"
                },
                {
                  "label": "Commercial Data & Analytics Platforms",
                  "id": "08.03.004.02",
                  "level": "segment",
                  "parent_id": "08.03.004",
                  "classification": "GIC",
                  "since": "2025-11-11",
                  "status": "active",
                  "segment_code": "02",
                  "subsector_id": "08.03.004",
                  "sector_id": "08.03",
                  "industry_id": "08"
                },
                {
                  "label": "Property & Asset Management Software",
                  "id": "08.03.004.03",
                  "level": "segment",
                  "parent_id": "08.03.004",
                  "classification": "GIC",
                  "since": "2025-11-11",
                  "status": "active",
                  "segment_code": "03",
                  "subsector_id": "08.03.004",
                  "sector_id": "08.03",
                  "industry_id": "08"
                },
                {
                  "label": "iBuyer & Direct Platforms",
                  "id": "08.03.004.04",
                  "level": "segment",
                  "parent_id": "08.03.004",
                  "classification": "GIC",
                  "since": "2025-11-11",
                  "status": "active",
                  "segment_code": "04",
                  "subsector_id": "08.03.004",
                  "sector_id": "08.03",
                  "industry_id": "08"
                }
              ],
              "sector_id": "08.03",
              "industry_id": "08"
            }
          ],
          "industry_id": "08"
        },
        {
          "label": "Specialized Real Estate",
          "id": "08.04",
          "level": "sector",
          "parent_id": "08",
          "classification": "GIC",
          "since": "2025-11-08",
          "status": "active",
          "subsectors": [
            {
              "label": "Data Centers",
              "id": "08.04.001",
              "level": "subsector",
              "parent_id": "08.04",
              "classification": "GIC",
              "since": "2025-11-08",
              "status": "active",
              "segments": [],
              "sector_id": "08.04",
              "industry_id": "08"
            },
            {
              "label": "Specialized Residential Properties",
              "id": "08.04.002",
              "level": "subsector",
              "parent_id": "08.04",
              "classification": "GIC",
              "since": "2025-11-08",
              "status": "active",
              "segments": [
                {
                  "label": "Student & Co-Living Housing",
                  "id": "08.04.002.01",
                  "level": "segment",
                  "parent_id": "08.04.002",
                  "classification": "GIC",
                  "since": "2025-11-10",
                  "status": "active",
                  "segment_code": "01",
                  "subsector_id": "08.04.002",
                  "sector_id": "08.04",
                  "industry_id": "08"
                },
                {
                  "label": "Senior & Assisted Living Facilities",
                  "id": "08.04.002.02",
                  "level": "segment",
                  "parent_id": "08.04.002",
                  "classification": "GIC",
                  "since": "2025-11-10",
                  "status": "active",
                  "segment_code": "02",
                  "subsector_id": "08.04.002",
                  "sector_id": "08.04",
                  "industry_id": "08"
                },
                {
                  "label": "Public & Institutional Sector Housing",
                  "id": "08.04.002.03",
                  "level": "segment",
                  "parent_id": "08.04.002",
                  "classification": "GIC",
                  "since": "2025-11-10",
                  "status": "active",
                  "segment_code": "03",
                  "subsector_id": "08.04.002",
                  "sector_id": "08.04",
                  "industry_id": "08"
                },
                {
                  "label": "Co-Living & Flexible Housing",
                  "id": "08.04.002.04",
                  "level": "segment",
                  "parent_id": "08.04.002",
                  "classification": "GIC",
                  "since": "2025-11-10",
                  "status": "active",
                  "segment_code": "04",
                  "subsector_id": "08.04.002",
                  "sector_id": "08.04",
                  "industry_id": "08"
                }
              ],
              "sector_id": "08.04",
              "industry_id": "08"
            },
            {
              "label": "Cell Towers",
              "id": "08.04.003",
              "level": "subsector",
              "parent_id": "08.04",
              "classification": "GIC",
              "since": "2025-11-12",
              "status": "active",
              "segments": [],
              "sector_id": "08.04",
              "industry_id": "08"
            },
            {
              "label": "Fiber Infrastructure",
              "id": "08.04.004",
              "level": "subsector",
              "parent_id": "08.04",
              "classification": "GIC",
              "since": "2025-11-12",
              "status": "active",
              "segments": [],
              "sector_id": "08.04",
              "industry_id": "08"
            }
          ],
          "industry_id": "08"
        }
      ]
    },
    {
      "label": "Technology",
      "id": "09",
      "level": "industry",
      "parent_id": null,
      "classification": "GIC",
      "since": "2025-11-08",
      "status": "active",
      "sectors": [
        {
          "label": "Software & Platforms",
          "id": "09.01",
          "level": "sector",
          "parent_id": "09",
          "classification": "GIC",
          "since": "2025-11-08",
          "status": "active",
          "subsectors": [
            {
              "label": "Application Software",
              "id": "09.01.001",
              "level": "subsector",
              "parent_id": "09.01",
              "classification": "GIC",
              "since": "2025-11-08",
              "status": "active",
              "segments": [
                {
                  "label": "ERP / Finance Suites",
                  "id": "09.01.001.01",
                  "level": "segment",
                  "parent_id": "09.01.001",
                  "classification": "GIC",
                  "since": "2025-11-10",
                  "status": "active",
                  "segment_code": "01",
                  "subsector_id": "09.01.001",
                  "sector_id": "09.01",
                  "industry_id": "09"
                },
                {
                  "label": "Supply Chain & Procurement Software",
                  "id": "09.01.001.02",
                  "level": "segment",
                  "parent_id": "09.01.001",
                  "classification": "GIC",
                  "since": "2025-11-12",
                  "status": "active",
                  "segment_code": "02",
                  "subsector_id": "09.01.001",
                  "sector_id": "09.01",
                  "industry_id": "09"
                },
                {
                  "label": "HCM / Workforce",
                  "id": "09.01.001.03",
                  "level": "segment",
                  "parent_id": "09.01.001",
                  "classification": "GIC",
                  "since": "2025-11-10",
                  "status": "active",
                  "segment_code": "03",
                  "subsector_id": "09.01.001",
                  "sector_id": "09.01",
                  "industry_id": "09"
                }
              ],
              "sector_id": "09.01",
              "industry_id": "09"
            },
            {
              "label": "Enterprise SaaS",
              "id": "09.01.002",
              "level": "subsector",
              "parent_id": "09.01",
              "classification": "GIC",
              "since": "2025-11-08",
              "status": "active",
              "segments": [
                {
                  "label": "Collaboration & Productivity",
                  "id": "09.01.002.01",
                  "level": "segment",
                  "parent_id": "09.01.002",
                  "classification": "GIC",
                  "since": "2025-11-12",
                  "status": "active",
                  "segment_code": "01",
                  "subsector_id": "09.01.002",
                  "sector_id": "09.01",
                  "industry_id": "09"
                },
                {
                  "label": "General Business Management",
                  "id": "09.01.002.02",
                  "level": "segment",
                  "parent_id": "09.01.002",
                  "classification": "GIC",
                  "since": "2025-11-12",
                  "status": "active",
                  "segment_code": "02",
                  "subsector_id": "09.01.002",
                  "sector_id": "09.01",
                  "industry_id": "09"
                }
              ],
              "sector_id": "09.01",
              "industry_id": "09"
            },
            {
              "label": "Cybersecurity Software",
              "id": "09.01.003",
              "level": "subsector",
              "parent_id": "09.01",
              "classification": "GIC",
              "since": "2025-11-08",
              "status": "active",
              "segments": [
                {
                  "label": "Network Security",
                  "id": "09.01.003.01",
                  "level": "segment",
                  "parent_id": "09.01.003",
                  "classification": "GIC",
                  "since": "2025-11-12",
                  "status": "active",
                  "segment_code": "01",
                  "subsector_id": "09.01.003",
                  "sector_id": "09.01",
                  "industry_id": "09"
                },
                {
                  "label": "Endpoint Security",
                  "id": "09.01.003.02",
                  "level": "segment",
                  "parent_id": "09.01.003",
                  "classification": "GIC",
                  "since": "2025-11-12",
                  "status": "active",
                  "segment_code": "02",
                  "subsector_id": "09.01.003",
                  "sector_id": "09.01",
                  "industry_id": "09"
                },
                {
                  "label": "Identity & Access Management (IAM)",
                  "id": "09.01.003.03",
                  "level": "segment",
                  "parent_id": "09.01.003",
                  "classification": "GIC",
                  "since": "2025-11-12",
                  "status": "active",
                  "segment_code": "03",
                  "subsector_id": "09.01.003",
                  "sector_id": "09.01",
                  "industry_id": "09"
                },
                {
                  "label": "Cloud Security",
                  "id": "09.01.003.04",
                  "level": "segment",
                  "parent_id": "09.01.003",
                  "classification": "GIC",
                  "since": "2025-11-12",
                  "status": "active",
                  "segment_code": "04",
                  "subsector_id": "09.01.003",
                  "sector_id": "09.01",
                  "industry_id": "09"
                }
              ],
              "sector_id": "09.01",
              "industry_id": "09"
            },
            {
              "label": "Cloud Platforms / PaaS",
              "id": "09.01.004",
              "level": "subsector",
              "parent_id": "09.01",
              "classification": "GIC",
              "since": "2025-11-08",
              "status": "active",
              "segments": [
                {
                  "label": "DevTools / DevOps",
                  "id": "09.01.004.01",
                  "level": "segment",
                  "parent_id": "09.01.004",
                  "classification": "GIC",
                  "since": "2025-11-10",
                  "status": "active",
                  "segment_code": "01",
                  "subsector_id": "09.01.004",
                  "sector_id": "09.01",
                  "industry_id": "09"
                },
                {
                  "label": "API / Integration",
                  "id": "09.01.004.02",
                  "level": "segment",
                  "parent_id": "09.01.004",
                  "classification": "GIC",
                  "since": "2025-11-10",
                  "status": "active",
                  "segment_code": "02",
                  "subsector_id": "09.01.004",
                  "sector_id": "09.01",
                  "industry_id": "09"
                },
                {
                  "label": "Observability & Monitoring Platforms",
                  "id": "09.01.004.03",
                  "level": "segment",
                  "parent_id": "09.01.004",
                  "classification": "GIC",
                  "since": "2025-11-12",
                  "status": "active",
                  "segment_code": "03",
                  "subsector_id": "09.01.004",
                  "sector_id": "09.01",
                  "industry_id": "09"
                }
              ],
              "sector_id": "09.01",
              "industry_id": "09"
            },
            {
              "label": "Data & Database Platforms",
              "id": "09.01.005",
              "level": "subsector",
              "parent_id": "09.01",
              "classification": "GIC",
              "since": "2025-11-08",
              "status": "active",
              "segments": [
                {
                  "label": "Database Management Systems (DBMS)",
                  "id": "09.01.005.01",
                  "level": "segment",
                  "parent_id": "09.01.005",
                  "classification": "GIC",
                  "since": "2025-11-12",
                  "status": "active",
                  "segment_code": "01",
                  "subsector_id": "09.01.005",
                  "sector_id": "09.01",
                  "industry_id": "09"
                },
                {
                  "label": "Data Warehousing",
                  "id": "09.01.005.02",
                  "level": "segment",
                  "parent_id": "09.01.005",
                  "classification": "GIC",
                  "since": "2025-11-12",
                  "status": "active",
                  "segment_code": "02",
                  "subsector_id": "09.01.005",
                  "sector_id": "09.01",
                  "industry_id": "09"
                },
                {
                  "label": "BI & Analytics Platforms",
                  "id": "09.01.005.03",
                  "level": "segment",
                  "parent_id": "09.01.005",
                  "classification": "GIC",
                  "since": "2025-11-12",
                  "status": "active",
                  "segment_code": "03",
                  "subsector_id": "09.01.005",
                  "sector_id": "09.01",
                  "industry_id": "09"
                }
              ],
              "sector_id": "09.01",
              "industry_id": "09"
            },
            {
              "label": "CRM & Customer Platforms",
              "id": "09.01.006",
              "level": "subsector",
              "parent_id": "09.01",
              "classification": "GIC",
              "since": "2025-11-08",
              "status": "active",
              "segments": [],
              "sector_id": "09.01",
              "industry_id": "09"
            },
            {
              "label": "AI & ML Platforms",
              "id": "09.01.007",
              "level": "subsector",
              "parent_id": "09.01",
              "classification": "GIC",
              "since": "2025-11-08",
              "status": "active",
              "segments": [
                {
                  "label": "Foundation Model Platforms",
                  "id": "09.01.007.01",
                  "level": "segment",
                  "parent_id": "09.01.007",
                  "classification": "GIC",
                  "since": "2025-11-11",
                  "status": "active",
                  "segment_code": "01",
                  "subsector_id": "09.01.007",
                  "sector_id": "09.01",
                  "industry_id": "09"
                },
                {
                  "label": "Model APIs & Orchestration",
                  "id": "09.01.007.02",
                  "level": "segment",
                  "parent_id": "09.01.007",
                  "classification": "GIC",
                  "since": "2025-11-11",
                  "status": "active",
                  "segment_code": "02",
                  "subsector_id": "09.01.007",
                  "sector_id": "09.01",
                  "industry_id": "09"
                },
                {
                  "label": "Applied AI Applications",
                  "id": "09.01.007.03",
                  "level": "segment",
                  "parent_id": "09.01.007",
                  "classification": "GIC",
                  "since": "2025-11-11",
                  "status": "active",
                  "segment_code": "03",
                  "subsector_id": "09.01.007",
                  "sector_id": "09.01",
                  "industry_id": "09"
                }
              ],
              "sector_id": "09.01",
              "industry_id": "09"
            },
            {
              "label": "Vertical Industry SaaS",
              "id": "09.01.008",
              "level": "subsector",
              "parent_id": "09.01",
              "classification": "GIC",
              "since": "2025-11-11",
              "status": "active",
              "segments": [],
              "sector_id": "09.01",
              "industry_id": "09"
            }
          ],
          "industry_id": "09"
        },
        {
          "label": "Hardware & Devices",
          "id": "09.02",
          "level": "sector",
          "parent_id": "09",
          "classification": "GIC",
          "since": "2025-11-08",
          "status": "active",
          "subsectors": [
            {
              "label": "Semiconductors — Design (Fabless & IP)",
              "id": "09.02.001",
              "level": "subsector",
              "parent_id": "09.02",
              "classification": "GIC",
              "since": "2025-11-11",
              "status": "active",
              "segments": [],
              "sector_id": "09.02",
              "industry_id": "09"
            },
            {
              "label": "Semiconductors — Manufacturing (Foundry & IDM)",
              "id": "09.02.002",
              "level": "subsector",
              "parent_id": "09.02",
              "classification": "GIC",
              "since": "2025-11-11",
              "status": "active",
              "segments": [],
              "sector_id": "09.02",
              "industry_id": "09"
            },
            {
              "label": "Semiconductor Equipment",
              "id": "09.02.003",
              "level": "subsector",
              "parent_id": "09.02",
              "classification": "GIC",
              "since": "2025-11-11",
              "status": "active",
              "segments": [],
              "sector_id": "09.02",
              "industry_id": "09"
            },
            {
              "label": "Semiconductor Materials",
              "id": "09.02.004",
              "level": "subsector",
              "parent_id": "09.02",
              "classification": "GIC",
              "since": "2025-11-11",
              "status": "active",
              "segments": [],
              "sector_id": "09.02",
              "industry_id": "09"
            },
            {
              "label": "Consumer Devices & Ecosystems",
              "id": "09.02.005",
              "level": "subsector",
              "parent_id": "09.02",
              "classification": "GIC",
              "since": "2025-11-11",
              "status": "active",
              "segments": [
                {
                  "label": "Smartphones",
                  "id": "09.02.005.01",
                  "level": "segment",
                  "parent_id": "09.02.005",
                  "classification": "GIC",
                  "since": "2025-11-11",
                  "status": "active",
                  "segment_code": "01",
                  "subsector_id": "09.02.005",
                  "sector_id": "09.02",
                  "industry_id": "09"
                },
                {
                  "label": "PCs / Tablets",
                  "id": "09.02.005.02",
                  "level": "segment",
                  "parent_id": "09.02.005",
                  "classification": "GIC",
                  "since": "2025-11-11",
                  "status": "active",
                  "segment_code": "02",
                  "subsector_id": "09.02.005",
                  "sector_id": "09.02",
                  "industry_id": "09"
                },
                {
                  "label": "Wearables",
                  "id": "09.02.005.03",
                  "level": "segment",
                  "parent_id": "09.02.005",
                  "classification": "GIC",
                  "since": "2025-11-11",
                  "status": "active",
                  "segment_code": "03",
                  "subsector_id": "09.02.005",
                  "sector_id": "09.02",
                  "industry_id": "09"
                }
              ],
              "sector_id": "09.02",
              "industry_id": "09"
            },
            {
              "label": "Network & Telecom Equipment",
              "id": "09.02.006",
              "level": "subsector",
              "parent_id": "09.02",
              "classification": "GIC",
              "since": "2025-11-11",
              "status": "active",
              "segments": [],
              "sector_id": "09.02",
              "industry_id": "09"
            },
            {
              "label": "Imaging, Sensors & Components",
              "id": "09.02.007",
              "level": "subsector",
              "parent_id": "09.02",
              "classification": "GIC",
              "since": "2025-11-11",
              "status": "active",
              "segments": [],
              "sector_id": "09.02",
              "industry_id": "09"
            }
          ],
          "industry_id": "09"
        },
        {
          "label": "IT Services",
          "id": "09.03",
          "level": "sector",
          "parent_id": "09",
          "classification": "GIC",
          "since": "2025-11-08",
          "status": "active",
          "subsectors": [
            {
              "label": "IT Consulting",
              "id": "09.03.001",
              "level": "subsector",
              "parent_id": "09.03",
              "classification": "GIC",
              "since": "2025-11-08",
              "status": "active",
              "segments": [],
              "sector_id": "09.03",
              "industry_id": "09"
            },
            {
              "label": "Managed Services",
              "id": "09.03.002",
              "level": "subsector",
              "parent_id": "09.03",
              "classification": "GIC",
              "since": "2025-11-08",
              "status": "active",
              "segments": [],
              "sector_id": "09.03",
              "industry_id": "09"
            },
            {
              "label": "Data Center Services",
              "id": "09.03.003",
              "level": "subsector",
              "parent_id": "09.03",
              "classification": "GIC",
              "since": "2025-11-08",
              "status": "active",
              "segments": [],
              "sector_id": "09.03",
              "industry_id": "09"
            },
            {
              "label": "Cybersecurity Services",
              "id": "09.03.004",
              "level": "subsector",
              "parent_id": "09.03",
              "classification": "GIC",
              "since": "2025-11-08",
              "status": "active",
              "segments": [],
              "sector_id": "09.03",
              "industry_id": "09"
            }
          ],
          "industry_id": "09"
        },
        {
          "label": "Emerging Tech & Automation",
          "id": "09.04",
          "level": "sector",
          "parent_id": "09",
          "classification": "GIC",
          "since": "2025-11-08",
          "status": "active",
          "subsectors": [
            {
              "label": "Robotics & Automation",
              "id": "09.04.001",
              "level": "subsector",
              "parent_id": "09.04",
              "classification": "GIC",
              "since": "2025-11-08",
              "status": "active",
              "segments": [],
              "sector_id": "09.04",
              "industry_id": "09"
            },
            {
              "label": "IoT Platforms",
              "id": "09.04.002",
              "level": "subsector",
              "parent_id": "09.04",
              "classification": "GIC",
              "since": "2025-11-08",
              "status": "active",
              "segments": [],
              "sector_id": "09.04",
              "industry_id": "09"
            },
            {
              "label": "Emerging & Deep Tech",
              "id": "09.04.003",
              "level": "subsector",
              "parent_id": "09.04",
              "classification": "GIC",
              "since": "2025-11-12",
              "status": "active",
              "segments": [
                {
                  "label": "Quantum Computing",
                  "id": "09.04.003.01",
                  "level": "segment",
                  "parent_id": "09.04.003",
                  "classification": "GIC",
                  "since": "2025-11-12",
                  "status": "active",
                  "segment_code": "01",
                  "subsector_id": "09.04.003",
                  "sector_id": "09.04",
                  "industry_id": "09"
                },
                {
                  "label": "AGI Research",
                  "id": "09.04.003.02",
                  "level": "segment",
                  "parent_id": "09.04.003",
                  "classification": "GIC",
                  "since": "2025-11-12",
                  "status": "active",
                  "segment_code": "02",
                  "subsector_id": "09.04.003",
                  "sector_id": "09.04",
                  "industry_id": "09"
                },
                {
                  "label": "Advanced Materials",
                  "id": "09.04.003.03",
                  "level": "segment",
                  "parent_id": "09.04.003",
                  "classification": "GIC",
                  "since": "2025-11-12",
                  "status": "active",
                  "segment_code": "03",
                  "subsector_id": "09.04.003",
                  "sector_id": "09.04",
                  "industry_id": "09"
                },
                {
                  "label": "Fusion Energy",
                  "id": "09.04.003.04",
                  "level": "segment",
                  "parent_id": "09.04.003",
                  "classification": "GIC",
                  "since": "2025-11-12",
                  "status": "active",
                  "segment_code": "04",
                  "subsector_id": "09.04.003",
                  "sector_id": "09.04",
                  "industry_id": "09"
                }
              ],
              "sector_id": "09.04",
              "industry_id": "09"
            },
            {
              "label": "Spatial / XR Platforms",
              "id": "09.04.004",
              "level": "subsector",
              "parent_id": "09.04",
              "classification": "GIC",
              "since": "2025-11-08",
              "status": "active",
              "segments": [],
              "sector_id": "09.04",
              "industry_id": "09"
            }
          ],
          "industry_id": "09"
        }
      ]
    },
    {
      "label": "Communications & Media",
      "id": "10",
      "level": "industry",
      "parent_id": null,
      "classification": "GIC",
      "since": "2025-11-08",
      "status": "active",
      "sectors": [
        {
          "label": "Telecom & Connectivity",
          "id": "10.01",
          "level": "sector",
          "parent_id": "10",
          "classification": "GIC",
          "since": "2025-11-08",
          "status": "active",
          "subsectors": [
            {
              "label": "Mobile Network Operators",
              "id": "10.01.001",
              "level": "subsector",
              "parent_id": "10.01",
              "classification": "GIC",
              "since": "2025-11-08",
              "status": "active",
              "segments": [],
              "sector_id": "10.01",
              "industry_id": "10"
            },
            {
              "label": "Fixed-Line & Broadband",
              "id": "10.01.002",
              "level": "subsector",
              "parent_id": "10.01",
              "classification": "GIC",
              "since": "2025-11-08",
              "status": "active",
              "segments": [],
              "sector_id": "10.01",
              "industry_id": "10"
            },
            {
              "label": "Satellite & Edge Networks",
              "id": "10.01.003",
              "level": "subsector",
              "parent_id": "10.01",
              "classification": "GIC",
              "since": "2025-11-08",
              "status": "active",
              "segments": [],
              "sector_id": "10.01",
              "industry_id": "10"
            }
          ],
          "industry_id": "10"
        },
        {
          "label": "Media & Entertainment",
          "id": "10.02",
          "level": "sector",
          "parent_id": "10",
          "classification": "GIC",
          "since": "2025-11-08",
          "status": "active",
          "subsectors": [
            {
              "label": "Film, TV & Entertainment",
              "id": "10.02.001",
              "level": "subsector",
              "parent_id": "10.02",
              "classification": "GIC",
              "since": "2025-11-11",
              "status": "active",
              "segments": [
                {
                  "label": "Film & TV Production & Licensing",
                  "id": "10.02.001.01",
                  "level": "segment",
                  "parent_id": "10.02.001",
                  "classification": "GIC",
                  "since": "2025-11-11",
                  "status": "active",
                  "segment_code": "01",
                  "subsector_id": "10.02.001",
                  "sector_id": "10.02",
                  "industry_id": "10"
                },
                {
                  "label": "Streaming Video Platforms",
                  "id": "10.02.001.02",
                  "level": "segment",
                  "parent_id": "10.02.001",
                  "classification": "GIC",
                  "since": "2025-11-11",
                  "status": "active",
                  "segment_code": "02",
                  "subsector_id": "10.02.001",
                  "sector_id": "10.02",
                  "industry_id": "10"
                },
                {
                  "label": "Theatrical Exhibition",
                  "id": "10.02.001.03",
                  "level": "segment",
                  "parent_id": "10.02.001",
                  "classification": "GIC",
                  "since": "2025-11-11",
                  "status": "active",
                  "segment_code": "03",
                  "subsector_id": "10.02.001",
                  "sector_id": "10.02",
                  "industry_id": "10"
                },
                {
                  "label": "Media Production & Ancillary Services",
                  "id": "10.02.001.04",
                  "level": "segment",
                  "parent_id": "10.02.001",
                  "classification": "GIC",
                  "since": "2025-11-11",
                  "status": "active",
                  "segment_code": "04",
                  "subsector_id": "10.02.001",
                  "sector_id": "10.02",
                  "industry_id": "10"
                }
              ],
              "sector_id": "10.02",
              "industry_id": "10"
            },
            {
              "label": "Broadcasting & Networks",
              "id": "10.02.002",
              "level": "subsector",
              "parent_id": "10.02",
              "classification": "GIC",
              "since": "2025-11-11",
              "status": "active",
              "segments": [
                {
                  "label": "Broadcast TV Networks & Station Groups",
                  "id": "10.02.002.01",
                  "level": "segment",
                  "parent_id": "10.02.002",
                  "classification": "GIC",
                  "since": "2025-11-11",
                  "status": "active",
                  "segment_code": "01",
                  "subsector_id": "10.02.002",
                  "sector_id": "10.02",
                  "industry_id": "10"
                },
                {
                  "label": "Radio Networks & Stations",
                  "id": "10.02.002.02",
                  "level": "segment",
                  "parent_id": "10.02.002",
                  "classification": "GIC",
                  "since": "2025-11-11",
                  "status": "active",
                  "segment_code": "02",
                  "subsector_id": "10.02.002",
                  "sector_id": "10.02",
                  "industry_id": "10"
                },
                {
                  "label": "Cable & Satellite TV Providers",
                  "id": "10.02.002.03",
                  "level": "segment",
                  "parent_id": "10.02.002",
                  "classification": "GIC",
                  "since": "2025-11-11",
                  "status": "active",
                  "segment_code": "03",
                  "subsector_id": "10.02.002",
                  "sector_id": "10.02",
                  "industry_id": "10"
                },
                {
                  "label": "Cable Networks & Program Distribution",
                  "id": "10.02.002.04",
                  "level": "segment",
                  "parent_id": "10.02.002",
                  "classification": "GIC",
                  "since": "2025-11-11",
                  "status": "active",
                  "segment_code": "04",
                  "subsector_id": "10.02.002",
                  "sector_id": "10.02",
                  "industry_id": "10"
                }
              ],
              "sector_id": "10.02",
              "industry_id": "10"
            },
            {
              "label": "Recorded & Digital Music",
              "id": "10.02.003",
              "level": "subsector",
              "parent_id": "10.02",
              "classification": "GIC",
              "since": "2025-11-08",
              "status": "active",
              "segments": [
                {
                  "label": "Music Rights & Publishing",
                  "id": "10.02.003.01",
                  "level": "segment",
                  "parent_id": "10.02.003",
                  "classification": "GIC",
                  "since": "2025-11-10",
                  "status": "active",
                  "segment_code": "01",
                  "subsector_id": "10.02.003",
                  "sector_id": "10.02",
                  "industry_id": "10"
                },
                {
                  "label": "Music Streaming & Distribution",
                  "id": "10.02.003.02",
                  "level": "segment",
                  "parent_id": "10.02.003",
                  "classification": "GIC",
                  "since": "2025-11-10",
                  "status": "active",
                  "segment_code": "02",
                  "subsector_id": "10.02.003",
                  "sector_id": "10.02",
                  "industry_id": "10"
                },
                {
                  "label": "Live Music Promotion & Services",
                  "id": "10.02.003.03",
                  "level": "segment",
                  "parent_id": "10.02.003",
                  "classification": "GIC",
                  "since": "2025-11-10",
                  "status": "active",
                  "segment_code": "03",
                  "subsector_id": "10.02.003",
                  "sector_id": "10.02",
                  "industry_id": "10"
                },
                {
                  "label": "Music Technology Solutions",
                  "id": "10.02.003.04",
                  "level": "segment",
                  "parent_id": "10.02.003",
                  "classification": "GIC",
                  "since": "2025-11-10",
                  "status": "active",
                  "segment_code": "04",
                  "subsector_id": "10.02.003",
                  "sector_id": "10.02",
                  "industry_id": "10"
                }
              ],
              "sector_id": "10.02",
              "industry_id": "10"
            },
            {
              "label": "Diversified Entertainment",
              "id": "10.02.004",
              "level": "subsector",
              "parent_id": "10.02",
              "classification": "GIC",
              "since": "2025-11-08",
              "status": "active",
              "segments": [],
              "sector_id": "10.02",
              "industry_id": "10"
            },
            {
              "label": "Video Games & Interactive Media",
              "id": "10.02.005",
              "level": "subsector",
              "parent_id": "10.02",
              "classification": "GIC",
              "since": "2025-11-10",
              "status": "active",
              "segments": [
                {
                  "label": "Video Game Creation & Publishing",
                  "id": "10.02.005.01",
                  "level": "segment",
                  "parent_id": "10.02.005",
                  "classification": "GIC",
                  "since": "2025-11-10",
                  "status": "active",
                  "segment_code": "01",
                  "subsector_id": "10.02.005",
                  "sector_id": "10.02",
                  "industry_id": "10"
                },
                {
                  "label": "Interactive Platforms & Distribution",
                  "id": "10.02.005.02",
                  "level": "segment",
                  "parent_id": "10.02.005",
                  "classification": "GIC",
                  "since": "2025-11-10",
                  "status": "active",
                  "segment_code": "02",
                  "subsector_id": "10.02.005",
                  "sector_id": "10.02",
                  "industry_id": "10"
                },
                {
                  "label": "Gaming Technology & Support Services",
                  "id": "10.02.005.03",
                  "level": "segment",
                  "parent_id": "10.02.005",
                  "classification": "GIC",
                  "since": "2025-11-10",
                  "status": "active",
                  "segment_code": "03",
                  "subsector_id": "10.02.005",
                  "sector_id": "10.02",
                  "industry_id": "10"
                },
                {
                  "label": "Esports Competition & Media",
                  "id": "10.02.005.04",
                  "level": "segment",
                  "parent_id": "10.02.005",
                  "classification": "GIC",
                  "since": "2025-11-10",
                  "status": "active",
                  "segment_code": "04",
                  "subsector_id": "10.02.005",
                  "sector_id": "10.02",
                  "industry_id": "10"
                }
              ],
              "sector_id": "10.02",
              "industry_id": "10"
            },
            {
              "label": "Betting & iGaming",
              "id": "10.02.006",
              "level": "subsector",
              "parent_id": "10.02",
              "classification": "GIC",
              "since": "2025-11-11",
              "status": "active",
              "segments": [],
              "sector_id": "10.02",
              "industry_id": "10"
            }
          ],
          "industry_id": "10"
        },
        {
          "label": "Digital Platforms & Social",
          "id": "10.03",
          "level": "sector",
          "parent_id": "10",
          "classification": "GIC",
          "since": "2025-11-08",
          "status": "active",
          "subsectors": [
            {
              "label": "Social Networks",
              "id": "10.03.001",
              "level": "subsector",
              "parent_id": "10.03",
              "classification": "GIC",
              "since": "2025-11-08",
              "status": "active",
              "segments": [],
              "sector_id": "10.03",
              "industry_id": "10"
            },
            {
              "label": "Creator / UGC Platforms",
              "id": "10.03.002",
              "level": "subsector",
              "parent_id": "10.03",
              "classification": "GIC",
              "since": "2025-11-08",
              "status": "active",
              "segments": [],
              "sector_id": "10.03",
              "industry_id": "10"
            },
            {
              "label": "Messaging & Communications Apps",
              "id": "10.03.003",
              "level": "subsector",
              "parent_id": "10.03",
              "classification": "GIC",
              "since": "2025-11-08",
              "status": "active",
              "segments": [],
              "sector_id": "10.03",
              "industry_id": "10"
            },
            {
              "label": "Search & Digital Platforms",
              "id": "10.03.004",
              "level": "subsector",
              "parent_id": "10.03",
              "classification": "GIC",
              "since": "2025-11-08",
              "status": "active",
              "segments": [
                {
                  "label": "Search Engines",
                  "id": "10.03.004.01",
                  "level": "segment",
                  "parent_id": "10.03.004",
                  "classification": "GIC",
                  "since": "2025-11-12",
                  "status": "active",
                  "segment_code": "01",
                  "subsector_id": "10.03.004",
                  "sector_id": "10.03",
                  "industry_id": "10"
                },
                {
                  "label": "Multi-Service Digital Ecosystems",
                  "id": "10.03.004.02",
                  "level": "segment",
                  "parent_id": "10.03.004",
                  "classification": "GIC",
                  "since": "2025-11-12",
                  "status": "active",
                  "segment_code": "02",
                  "subsector_id": "10.03.004",
                  "sector_id": "10.03",
                  "industry_id": "10"
                }
              ],
              "sector_id": "10.03",
              "industry_id": "10"
            }
          ],
          "industry_id": "10"
        },
        {
          "label": "Advertising & Marketing Technology",
          "id": "10.04",
          "level": "sector",
          "parent_id": "10",
          "classification": "GIC",
          "since": "2025-11-12",
          "status": "active",
          "subsectors": [
            {
              "label": "Ad Networks & Exchanges",
              "id": "10.04.001",
              "level": "subsector",
              "parent_id": "10.04",
              "classification": "GIC",
              "since": "2025-11-08",
              "status": "active",
              "segments": [],
              "sector_id": "10.04",
              "industry_id": "10"
            },
            {
              "label": "Marketing Automation & Data Platforms",
              "id": "10.04.002",
              "level": "subsector",
              "parent_id": "10.04",
              "classification": "GIC",
              "since": "2025-11-12",
              "status": "active",
              "segments": [],
              "sector_id": "10.04",
              "industry_id": "10"
            }
          ],
          "industry_id": "10"
        }
      ]
    },
    {
      "label": "Utilities",
      "id": "11",
      "level": "industry",
      "parent_id": null,
      "classification": "GIC",
      "since": "2025-11-08",
      "status": "active",
      "sectors": [
        {
          "label": "Electric Utilities",
          "id": "11.01",
          "level": "sector",
          "parent_id": "11",
          "classification": "GIC",
          "since": "2025-11-08",
          "status": "active",
          "subsectors": [
            {
              "label": "Generation",
              "id": "11.01.001",
              "level": "subsector",
              "parent_id": "11.01",
              "classification": "GIC",
              "since": "2025-11-08",
              "status": "active",
              "segments": [],
              "sector_id": "11.01",
              "industry_id": "11"
            },
            {
              "label": "Transmission & Distribution",
              "id": "11.01.002",
              "level": "subsector",
              "parent_id": "11.01",
              "classification": "GIC",
              "since": "2025-11-08",
              "status": "active",
              "segments": [],
              "sector_id": "11.01",
              "industry_id": "11"
            },
            {
              "label": "Retail Electric",
              "id": "11.01.003",
              "level": "subsector",
              "parent_id": "11.01",
              "classification": "GIC",
              "since": "2025-11-08",
              "status": "active",
              "segments": [],
              "sector_id": "11.01",
              "industry_id": "11"
            }
          ],
          "industry_id": "11"
        },
        {
          "label": "Gas Utilities",
          "id": "11.02",
          "level": "sector",
          "parent_id": "11",
          "classification": "GIC",
          "since": "2025-11-08",
          "status": "active",
          "subsectors": [
            {
              "label": "Gas Distribution",
              "id": "11.02.001",
              "level": "subsector",
              "parent_id": "11.02",
              "classification": "GIC",
              "since": "2025-11-08",
              "status": "active",
              "segments": [],
              "sector_id": "11.02",
              "industry_id": "11"
            },
            {
              "label": "LNG Utility Services",
              "id": "11.02.002",
              "level": "subsector",
              "parent_id": "11.02",
              "classification": "GIC",
              "since": "2025-11-08",
              "status": "active",
              "segments": [],
              "sector_id": "11.02",
              "industry_id": "11"
            }
          ],
          "industry_id": "11"
        },
        {
          "label": "Water Utilities",
          "id": "11.03",
          "level": "sector",
          "parent_id": "11",
          "classification": "GIC",
          "since": "2025-11-08",
          "status": "active",
          "subsectors": [
            {
              "label": "Water Supply",
              "id": "11.03.001",
              "level": "subsector",
              "parent_id": "11.03",
              "classification": "GIC",
              "since": "2025-11-08",
              "status": "active",
              "segments": [],
              "sector_id": "11.03",
              "industry_id": "11"
            },
            {
              "label": "Wastewater Services",
              "id": "11.03.002",
              "level": "subsector",
              "parent_id": "11.03",
              "classification": "GIC",
              "since": "2025-11-08",
              "status": "active",
              "segments": [],
              "sector_id": "11.03",
              "industry_id": "11"
            }
          ],
          "industry_id": "11"
        },
        {
          "label": "Multi-Utilities & Environmental",
          "id": "11.04",
          "level": "sector",
          "parent_id": "11",
          "classification": "GIC",
          "since": "2025-11-08",
          "status": "active",
          "subsectors": [
            {
              "label": "Multi-Utility Operations",
              "id": "11.04.001",
              "level": "subsector",
              "parent_id": "11.04",
              "classification": "GIC",
              "since": "2025-11-08",
              "status": "active",
              "segments": [],
              "sector_id": "11.04",
              "industry_id": "11"
            },
            {
              "label": "Waste & Recycling",
              "id": "11.04.002",
              "level": "subsector",
              "parent_id": "11.04",
              "classification": "GIC",
              "since": "2025-11-08",
              "status": "active",
              "segments": [],
              "sector_id": "11.04",
              "industry_id": "11"
            },
            {
              "label": "Carbon Project Services & Trading",
              "id": "11.04.003",
              "level": "subsector",
              "parent_id": "11.04",
              "classification": "GIC",
              "since": "2025-11-11",
              "status": "active",
              "segments": [],
              "sector_id": "11.04",
              "industry_id": "11"
            },
            {
              "label": "CCUS Equipment & Services",
              "id": "11.04.004",
              "level": "subsector",
              "parent_id": "11.04",
              "classification": "GIC",
              "since": "2025-11-11",
              "status": "active",
              "segments": [],
              "sector_id": "11.04",
              "industry_id": "11"
            }
          ],
          "industry_id": "11"
        }
      ]
    },
    {
      "label": "Government / Public / Education",
      "id": "12",
      "level": "industry",
      "parent_id": null,
      "classification": "GIC",
      "since": "2025-11-08",
      "status": "active",
      "sectors": [
        {
          "label": "Public Administration",
          "id": "12.01",
          "level": "sector",
          "parent_id": "12",
          "classification": "GIC",
          "since": "2025-11-08",
          "status": "active",
          "subsectors": [
            {
              "label": "Central / Federal",
              "id": "12.01.001",
              "level": "subsector",
              "parent_id": "12.01",
              "classification": "GIC",
              "since": "2025-11-08",
              "status": "active",
              "segments": [],
              "sector_id": "12.01",
              "industry_id": "12"
            },
            {
              "label": "State / Regional",
              "id": "12.01.002",
              "level": "subsector",
              "parent_id": "12.01",
              "classification": "GIC",
              "since": "2025-11-08",
              "status": "active",
              "segments": [],
              "sector_id": "12.01",
              "industry_id": "12"
            },
            {
              "label": "Municipal Services",
              "id": "12.01.003",
              "level": "subsector",
              "parent_id": "12.01",
              "classification": "GIC",
              "since": "2025-11-08",
              "status": "active",
              "segments": [],
              "sector_id": "12.01",
              "industry_id": "12"
            }
          ],
          "industry_id": "12"
        },
        {
          "label": "Education & Training",
          "id": "12.02",
          "level": "sector",
          "parent_id": "12",
          "classification": "GIC",
          "since": "2025-11-08",
          "status": "active",
          "subsectors": [
            {
              "label": "K-12 Operators",
              "id": "12.02.001",
              "level": "subsector",
              "parent_id": "12.02",
              "classification": "GIC",
              "since": "2025-11-08",
              "status": "active",
              "segments": [],
              "sector_id": "12.02",
              "industry_id": "12"
            },
            {
              "label": "Higher Education",
              "id": "12.02.002",
              "level": "subsector",
              "parent_id": "12.02",
              "classification": "GIC",
              "since": "2025-11-08",
              "status": "active",
              "segments": [],
              "sector_id": "12.02",
              "industry_id": "12"
            },
            {
              "label": "EdTech Providers",
              "id": "12.02.003",
              "level": "subsector",
              "parent_id": "12.02",
              "classification": "GIC",
              "since": "2025-11-08",
              "status": "active",
              "segments": [],
              "sector_id": "12.02",
              "industry_id": "12"
            }
          ],
          "industry_id": "12"
        },
        {
          "label": "Public Safety & Defense Services",
          "id": "12.03",
          "level": "sector",
          "parent_id": "12",
          "classification": "GIC",
          "since": "2025-11-08",
          "status": "active",
          "subsectors": [
            {
              "label": "Emergency & Response",
              "id": "12.03.001",
              "level": "subsector",
              "parent_id": "12.03",
              "classification": "GIC",
              "since": "2025-11-08",
              "status": "active",
              "segments": [],
              "sector_id": "12.03",
              "industry_id": "12"
            },
            {
              "label": "Contracted Gov Services",
              "id": "12.03.002",
              "level": "subsector",
              "parent_id": "12.03",
              "classification": "GIC",
              "since": "2025-11-08",
              "status": "active",
              "segments": [],
              "sector_id": "12.03",
              "industry_id": "12"
            },
            {
              "label": "Private Defense / Public Safety Contractors",
              "id": "12.03.003",
              "level": "subsector",
              "parent_id": "12.03",
              "classification": "GIC",
              "since": "2025-11-08",
              "status": "active",
              "segments": [],
              "sector_id": "12.03",
              "industry_id": "12"
            }
          ],
          "industry_id": "12"
        },
        {
          "label": "NGOs & Multilaterals",
          "id": "12.04",
          "level": "sector",
          "parent_id": "12",
          "classification": "GIC",
          "since": "2025-11-08",
          "status": "active",
          "subsectors": [
            {
              "label": "Nonprofits",
              "id": "12.04.001",
              "level": "subsector",
              "parent_id": "12.04",
              "classification": "GIC",
              "since": "2025-11-08",
              "status": "active",
              "segments": [],
              "sector_id": "12.04",
              "industry_id": "12"
            },
            {
              "label": "Development Agencies",
              "id": "12.04.002",
              "level": "subsector",
              "parent_id": "12.04",
              "classification": "GIC",
              "since": "2025-11-08",
              "status": "active",
              "segments": [],
              "sector_id": "12.04",
              "industry_id": "12"
            }
          ],
          "industry_id": "12"
        }
      ]
    },
    {
      "label": "Digital & Onchain Economy",
      "id": "13",
      "level": "industry",
      "parent_id": null,
      "classification": "DIC",
      "since": "2025-11-08",
      "status": "active",
      "sectors": [
        {
          "label": "DLT & Blockchain Infrastructure",
          "id": "13.01",
          "level": "sector",
          "parent_id": "13",
          "classification": "DIC",
          "since": "2025-11-08",
          "status": "active",
          "subsectors": [
            {
              "label": "Public / Permissionless L1",
              "id": "13.01.001",
              "level": "subsector",
              "parent_id": "13.01",
              "classification": "DIC",
              "since": "2025-11-08",
              "status": "active",
              "segments": [
                {
                  "label": "EVM L1",
                  "id": "13.01.001.01",
                  "level": "segment",
                  "parent_id": "13.01.001",
                  "classification": "DIC",
                  "since": "2025-11-10",
                  "status": "active",
                  "segment_code": "01",
                  "subsector_id": "13.01.001",
                  "sector_id": "13.01",
                  "industry_id": "13"
                },
                {
                  "label": "Non-EVM L1",
                  "id": "13.01.001.02",
                  "level": "segment",
                  "parent_id": "13.01.001",
                  "classification": "DIC",
                  "since": "2025-11-10",
                  "status": "active",
                  "segment_code": "02",
                  "subsector_id": "13.01.001",
                  "sector_id": "13.01",
                  "industry_id": "13"
                }
              ],
              "sector_id": "13.01",
              "industry_id": "13"
            },
            {
              "label": "L2 / Rollup Infrastructure",
              "id": "13.01.002",
              "level": "subsector",
              "parent_id": "13.01",
              "classification": "DIC",
              "since": "2025-11-08",
              "status": "active",
              "segments": [
                {
                  "label": "Optimistic Rollups",
                  "id": "13.01.002.01",
                  "level": "segment",
                  "parent_id": "13.01.002",
                  "classification": "DIC",
                  "since": "2025-11-10",
                  "status": "active",
                  "segment_code": "01",
                  "subsector_id": "13.01.002",
                  "sector_id": "13.01",
                  "industry_id": "13"
                },
                {
                  "label": "ZK Rollups",
                  "id": "13.01.002.02",
                  "level": "segment",
                  "parent_id": "13.01.002",
                  "classification": "DIC",
                  "since": "2025-11-10",
                  "status": "active",
                  "segment_code": "02",
                  "subsector_id": "13.01.002",
                  "sector_id": "13.01",
                  "industry_id": "13"
                }
              ],
              "sector_id": "13.01",
              "industry_id": "13"
            },
            {
              "label": "Validator / Staking Services",
              "id": "13.01.003",
              "level": "subsector",
              "parent_id": "13.01",
              "classification": "DIC",
              "since": "2025-11-08",
              "status": "active",
              "segments": [
                {
                  "label": "Node / Validator Ops",
                  "id": "13.01.003.01",
                  "level": "segment",
                  "parent_id": "13.01.003",
                  "classification": "DIC",
                  "since": "2025-11-10",
                  "status": "active",
                  "segment_code": "01",
                  "subsector_id": "13.01.003",
                  "sector_id": "13.01",
                  "industry_id": "13"
                },
                {
                  "label": "Liquid Staking",
                  "id": "13.01.003.02",
                  "level": "segment",
                  "parent_id": "13.01.003",
                  "classification": "DIC",
                  "since": "2025-11-10",
                  "status": "active",
                  "segment_code": "02",
                  "subsector_id": "13.01.003",
                  "sector_id": "13.01",
                  "industry_id": "13"
                }
              ],
              "sector_id": "13.01",
              "industry_id": "13"
            },
            {
              "label": "Interoperability & Data Indexing",
              "id": "13.01.004",
              "level": "subsector",
              "parent_id": "13.01",
              "classification": "DIC",
              "since": "2025-11-08",
              "status": "active",
              "segments": [],
              "sector_id": "13.01",
              "industry_id": "13"
            },
            {
              "label": "Enterprise / Permissioned DLT",
              "id": "13.01.005",
              "level": "subsector",
              "parent_id": "13.01",
              "classification": "DIC",
              "since": "2025-11-10",
              "status": "active",
              "segments": [],
              "sector_id": "13.01",
              "industry_id": "13"
            },
            {
              "label": "Cross-chain Infrastructure",
              "id": "13.01.006",
              "level": "subsector",
              "parent_id": "13.01",
              "classification": "DIC",
              "since": "2025-11-10",
              "status": "active",
              "segments": [],
              "sector_id": "13.01",
              "industry_id": "13"
            },
            {
              "label": "DePIN Infrastructure",
              "id": "13.01.007",
              "level": "subsector",
              "parent_id": "13.01",
              "classification": "DIC",
              "since": "2025-11-11",
              "status": "active",
              "segments": [],
              "sector_id": "13.01",
              "industry_id": "13"
            }
          ],
          "industry_id": "13"
        },
        {
          "label": "Centralized Exchanges & Trading",
          "id": "13.02",
          "level": "sector",
          "parent_id": "13",
          "classification": "DIC",
          "since": "2025-11-08",
          "status": "active",
          "subsectors": [
            {
              "label": "Centralized Exchanges (CEX)",
              "id": "13.02.001",
              "level": "subsector",
              "parent_id": "13.02",
              "classification": "DIC",
              "since": "2025-11-08",
              "status": "active",
              "segments": [
                {
                  "label": "Spot CEX",
                  "id": "13.02.001.01",
                  "level": "segment",
                  "parent_id": "13.02.001",
                  "classification": "DIC",
                  "since": "2025-11-10",
                  "status": "active",
                  "segment_code": "01",
                  "subsector_id": "13.02.001",
                  "sector_id": "13.02",
                  "industry_id": "13"
                },
                {
                  "label": "Derivatives CEX",
                  "id": "13.02.001.02",
                  "level": "segment",
                  "parent_id": "13.02.001",
                  "classification": "DIC",
                  "since": "2025-11-10",
                  "status": "active",
                  "segment_code": "02",
                  "subsector_id": "13.02.001",
                  "sector_id": "13.02",
                  "industry_id": "13"
                },
                {
                  "label": "Fiat On/Off Ramp CEX",
                  "id": "13.02.001.03",
                  "level": "segment",
                  "parent_id": "13.02.001",
                  "classification": "DIC",
                  "since": "2025-11-10",
                  "status": "active",
                  "segment_code": "03",
                  "subsector_id": "13.02.001",
                  "sector_id": "13.02",
                  "industry_id": "13"
                }
              ],
              "sector_id": "13.02",
              "industry_id": "13"
            },
            {
              "label": "Decentralized Exchanges (DEX/AMM)",
              "id": "13.02.002",
              "level": "subsector",
              "parent_id": "13.02",
              "classification": "DIC",
              "since": "2025-11-08",
              "status": "active",
              "segments": [
                {
                  "label": "L1 DEX",
                  "id": "13.02.002.01",
                  "level": "segment",
                  "parent_id": "13.02.002",
                  "classification": "DIC",
                  "since": "2025-11-10",
                  "status": "active",
                  "segment_code": "01",
                  "subsector_id": "13.02.002",
                  "sector_id": "13.02",
                  "industry_id": "13"
                },
                {
                  "label": "L2 DEX",
                  "id": "13.02.002.02",
                  "level": "segment",
                  "parent_id": "13.02.002",
                  "classification": "DIC",
                  "since": "2025-11-10",
                  "status": "active",
                  "segment_code": "02",
                  "subsector_id": "13.02.002",
                  "sector_id": "13.02",
                  "industry_id": "13"
                }
              ],
              "sector_id": "13.02",
              "industry_id": "13"
            },
            {
              "label": "Custody & Key Management",
              "id": "13.02.003",
              "level": "subsector",
              "parent_id": "13.02",
              "classification": "DIC",
              "since": "2025-11-08",
              "status": "active",
              "segments": [
                {
                  "label": "Institutional Custody",
                  "id": "13.02.003.01",
                  "level": "segment",
                  "parent_id": "13.02.003",
                  "classification": "DIC",
                  "since": "2025-11-10",
                  "status": "active",
                  "segment_code": "01",
                  "subsector_id": "13.02.003",
                  "sector_id": "13.02",
                  "industry_id": "13"
                },
                {
                  "label": "MPC / Wallet Infrastructure",
                  "id": "13.02.003.02",
                  "level": "segment",
                  "parent_id": "13.02.003",
                  "classification": "DIC",
                  "since": "2025-11-10",
                  "status": "active",
                  "segment_code": "02",
                  "subsector_id": "13.02.003",
                  "sector_id": "13.02",
                  "industry_id": "13"
                }
              ],
              "sector_id": "13.02",
              "industry_id": "13"
            },
            {
              "label": "Stablecoin / Digital Currency Platforms",
              "id": "13.02.004",
              "level": "subsector",
              "parent_id": "13.02",
              "classification": "DIC",
              "since": "2025-11-08",
              "status": "active",
              "segments": [
                {
                  "label": "Fiat-backed Stablecoins",
                  "id": "13.02.004.01",
                  "level": "segment",
                  "parent_id": "13.02.004",
                  "classification": "DIC",
                  "since": "2025-11-10",
                  "status": "active",
                  "segment_code": "01",
                  "subsector_id": "13.02.004",
                  "sector_id": "13.02",
                  "industry_id": "13"
                },
                {
                  "label": "Crypto-collateralized Stablecoins",
                  "id": "13.02.004.02",
                  "level": "segment",
                  "parent_id": "13.02.004",
                  "classification": "DIC",
                  "since": "2025-11-10",
                  "status": "active",
                  "segment_code": "02",
                  "subsector_id": "13.02.004",
                  "sector_id": "13.02",
                  "industry_id": "13"
                },
                {
                  "label": "Platform-linked Stablecoins",
                  "id": "13.02.004.03",
                  "level": "segment",
                  "parent_id": "13.02.004",
                  "classification": "DIC",
                  "since": "2025-11-10",
                  "status": "active",
                  "segment_code": "03",
                  "subsector_id": "13.02.004",
                  "sector_id": "13.02",
                  "industry_id": "13"
                }
              ],
              "sector_id": "13.02",
              "industry_id": "13"
            },
            {
              "label": "Tokenization & Digital Securities",
              "id": "13.02.005",
              "level": "subsector",
              "parent_id": "13.02",
              "classification": "DIC",
              "since": "2025-11-08",
              "status": "active",
              "segments": [],
              "sector_id": "13.02",
              "industry_id": "13"
            },
            {
              "label": "OTC / Prime Brokerage",
              "id": "13.02.006",
              "level": "subsector",
              "parent_id": "13.02",
              "classification": "DIC",
              "since": "2025-11-10",
              "status": "active",
              "segments": [],
              "sector_id": "13.02",
              "industry_id": "13"
            },
            {
              "label": "Market Making",
              "id": "13.02.007",
              "level": "subsector",
              "parent_id": "13.02",
              "classification": "DIC",
              "since": "2025-11-10",
              "status": "active",
              "segments": [],
              "sector_id": "13.02",
              "industry_id": "13"
            }
          ],
          "industry_id": "13"
        },
        {
          "label": "Onchain Applications & Experiences",
          "id": "13.03",
          "level": "sector",
          "parent_id": "13",
          "classification": "DIC",
          "since": "2025-11-08",
          "status": "active",
          "subsectors": [
            {
              "label": "DeFi (non-exchange)",
              "id": "13.03.001",
              "level": "subsector",
              "parent_id": "13.03",
              "classification": "DIC",
              "since": "2025-11-08",
              "status": "active",
              "segments": [
                {
                  "label": "Lending Protocols",
                  "id": "13.03.001.01",
                  "level": "segment",
                  "parent_id": "13.03.001",
                  "classification": "DIC",
                  "since": "2025-11-10",
                  "status": "active",
                  "segment_code": "01",
                  "subsector_id": "13.03.001",
                  "sector_id": "13.03",
                  "industry_id": "13"
                },
                {
                  "label": "Derivatives Protocols",
                  "id": "13.03.001.02",
                  "level": "segment",
                  "parent_id": "13.03.001",
                  "classification": "DIC",
                  "since": "2025-11-10",
                  "status": "active",
                  "segment_code": "02",
                  "subsector_id": "13.03.001",
                  "sector_id": "13.03",
                  "industry_id": "13"
                },
                {
                  "label": "Yield Aggregators",
                  "id": "13.03.001.03",
                  "level": "segment",
                  "parent_id": "13.03.001",
                  "classification": "DIC",
                  "since": "2025-11-10",
                  "status": "active",
                  "segment_code": "03",
                  "subsector_id": "13.03.001",
                  "sector_id": "13.03",
                  "industry_id": "13"
                },
                {
                  "label": "Options Protocols",
                  "id": "13.03.001.04",
                  "level": "segment",
                  "parent_id": "13.03.001",
                  "classification": "DIC",
                  "since": "2025-11-10",
                  "status": "active",
                  "segment_code": "04",
                  "subsector_id": "13.03.001",
                  "sector_id": "13.03",
                  "industry_id": "13"
                }
              ],
              "sector_id": "13.03",
              "industry_id": "13"
            },
            {
              "label": "NFT / Digital Collectibles",
              "id": "13.03.002",
              "level": "subsector",
              "parent_id": "13.03",
              "classification": "DIC",
              "since": "2025-11-08",
              "status": "active",
              "segments": [],
              "sector_id": "13.03",
              "industry_id": "13"
            },
            {
              "label": "Onchain Gaming / GameFi",
              "id": "13.03.003",
              "level": "subsector",
              "parent_id": "13.03",
              "classification": "DIC",
              "since": "2025-11-08",
              "status": "active",
              "segments": [],
              "sector_id": "13.03",
              "industry_id": "13"
            },
            {
              "label": "Onchain Social",
              "id": "13.03.004",
              "level": "subsector",
              "parent_id": "13.03",
              "classification": "DIC",
              "since": "2025-11-08",
              "status": "active",
              "segments": [],
              "sector_id": "13.03",
              "industry_id": "13"
            },
            {
              "label": "DePIN Applications",
              "id": "13.03.005",
              "level": "subsector",
              "parent_id": "13.03",
              "classification": "DIC",
              "since": "2025-11-11",
              "status": "active",
              "segments": [],
              "sector_id": "13.03",
              "industry_id": "13"
            }
          ],
          "industry_id": "13"
        },
        {
          "label": "Onchain Services, Security & Compliance",
          "id": "13.04",
          "level": "sector",
          "parent_id": "13",
          "classification": "DIC",
          "since": "2025-11-08",
          "status": "active",
          "subsectors": [
            {
              "label": "Blockchain Data / Analytics",
              "id": "13.04.001",
              "level": "subsector",
              "parent_id": "13.04",
              "classification": "DIC",
              "since": "2025-11-08",
              "status": "active",
              "segments": [],
              "sector_id": "13.04",
              "industry_id": "13"
            },
            {
              "label": "Security / Audit Services",
              "id": "13.04.002",
              "level": "subsector",
              "parent_id": "13.04",
              "classification": "DIC",
              "since": "2025-11-08",
              "status": "active",
              "segments": [],
              "sector_id": "13.04",
              "industry_id": "13"
            },
            {
              "label": "Onchain Identity / Attestations",
              "id": "13.04.003",
              "level": "subsector",
              "parent_id": "13.04",
              "classification": "DIC",
              "since": "2025-11-08",
              "status": "active",
              "segments": [],
              "sector_id": "13.04",
              "industry_id": "13"
            },
            {
              "label": "Compliance / Travel Rule Providers",
              "id": "13.04.004",
              "level": "subsector",
              "parent_id": "13.04",
              "classification": "DIC",
              "since": "2025-11-08",
              "status": "active",
              "segments": [],
              "sector_id": "13.04",
              "industry_id": "13"
            }
          ],
          "industry_id": "13"
        }
      ]
    },
    {
      "label": "Professional & Business Services",
      "id": "14",
      "level": "industry",
      "parent_id": null,
      "classification": "GIC",
      "since": "2025-11-11",
      "status": "active",
      "sectors": [
        {
          "label": "Professional Services",
          "id": "14.01",
          "level": "sector",
          "parent_id": "14",
          "classification": "GIC",
          "since": "2025-11-11",
          "status": "active",
          "subsectors": [
            {
              "label": "Management & Strategy Consulting",
              "id": "14.01.001",
              "level": "subsector",
              "parent_id": "14.01",
              "classification": "GIC",
              "since": "2025-11-11",
              "status": "active",
              "segments": [],
              "sector_id": "14.01",
              "industry_id": "14"
            },
            {
              "label": "Legal Services",
              "id": "14.01.002",
              "level": "subsector",
              "parent_id": "14.01",
              "classification": "GIC",
              "since": "2025-11-11",
              "status": "active",
              "segments": [],
              "sector_id": "14.01",
              "industry_id": "14"
            },
            {
              "label": "Accounting, Audit & Tax Services",
              "id": "14.01.003",
              "level": "subsector",
              "parent_id": "14.01",
              "classification": "GIC",
              "since": "2025-11-11",
              "status": "active",
              "segments": [],
              "sector_id": "14.01",
              "industry_id": "14"
            },
            {
              "label": "Specialized Advisory",
              "id": "14.01.004",
              "level": "subsector",
              "parent_id": "14.01",
              "classification": "GIC",
              "since": "2025-11-11",
              "status": "active",
              "segments": [
                {
                  "label": "HR, Compensation & Benefits",
                  "id": "14.01.004.01",
                  "level": "segment",
                  "parent_id": "14.01.004",
                  "classification": "GIC",
                  "since": "2025-11-11",
                  "status": "active",
                  "segment_code": "01",
                  "subsector_id": "14.01.004",
                  "sector_id": "14.01",
                  "industry_id": "14"
                },
                {
                  "label": "ESG, Risk & Sustainability Advisory",
                  "id": "14.01.004.02",
                  "level": "segment",
                  "parent_id": "14.01.004",
                  "classification": "GIC",
                  "since": "2025-11-11",
                  "status": "active",
                  "segment_code": "02",
                  "subsector_id": "14.01.004",
                  "sector_id": "14.01",
                  "industry_id": "14"
                }
              ],
              "sector_id": "14.01",
              "industry_id": "14"
            }
          ],
          "industry_id": "14"
        },
        {
          "label": "Business Support & Outsourcing",
          "id": "14.02",
          "level": "sector",
          "parent_id": "14",
          "classification": "GIC",
          "since": "2025-11-11",
          "status": "active",
          "subsectors": [
            {
              "label": "Staffing & Employment Services",
              "id": "14.02.001",
              "level": "subsector",
              "parent_id": "14.02",
              "classification": "GIC",
              "since": "2025-11-11",
              "status": "active",
              "segments": [
                {
                  "label": "Temporary & Contract Staffing",
                  "id": "14.02.001.01",
                  "level": "segment",
                  "parent_id": "14.02.001",
                  "classification": "GIC",
                  "since": "2025-11-11",
                  "status": "active",
                  "segment_code": "01",
                  "subsector_id": "14.02.001",
                  "sector_id": "14.02",
                  "industry_id": "14"
                },
                {
                  "label": "Permanent & Executive Search",
                  "id": "14.02.001.02",
                  "level": "segment",
                  "parent_id": "14.02.001",
                  "classification": "GIC",
                  "since": "2025-11-11",
                  "status": "active",
                  "segment_code": "02",
                  "subsector_id": "14.02.001",
                  "sector_id": "14.02",
                  "industry_id": "14"
                }
              ],
              "sector_id": "14.02",
              "industry_id": "14"
            },
            {
              "label": "Business Process Outsourcing (BPO)",
              "id": "14.02.002",
              "level": "subsector",
              "parent_id": "14.02",
              "classification": "GIC",
              "since": "2025-11-11",
              "status": "active",
              "segments": [],
              "sector_id": "14.02",
              "industry_id": "14"
            },
            {
              "label": "Corporate Support Services",
              "id": "14.02.003",
              "level": "subsector",
              "parent_id": "14.02",
              "classification": "GIC",
              "since": "2025-11-11",
              "status": "active",
              "segments": [],
              "sector_id": "14.02",
              "industry_id": "14"
            }
          ],
          "industry_id": "14"
        },
        {
          "label": "Data, Information & Marketing Services",
          "id": "14.03",
          "level": "sector",
          "parent_id": "14",
          "classification": "GIC",
          "since": "2025-11-11",
          "status": "active",
          "subsectors": [
            {
              "label": "Financial Data, Ratings & Analytics",
              "id": "14.03.001",
              "level": "subsector",
              "parent_id": "14.03",
              "classification": "GIC",
              "since": "2025-11-11",
              "status": "active",
              "segments": [],
              "sector_id": "14.03",
              "industry_id": "14"
            },
            {
              "label": "Market Research & General Data",
              "id": "14.03.002",
              "level": "subsector",
              "parent_id": "14.03",
              "classification": "GIC",
              "since": "2025-11-11",
              "status": "active",
              "segments": [],
              "sector_id": "14.03",
              "industry_id": "14"
            },
            {
              "label": "Advertising & Marketing Agencies",
              "id": "14.03.003",
              "level": "subsector",
              "parent_id": "14.03",
              "classification": "GIC",
              "since": "2025-11-11",
              "status": "active",
              "segments": [
                {
                  "label": "Integrated Agencies & Holding Groups",
                  "id": "14.03.003.01",
                  "level": "segment",
                  "parent_id": "14.03.003",
                  "classification": "GIC",
                  "since": "2025-11-11",
                  "status": "active",
                  "segment_code": "01",
                  "subsector_id": "14.03.003",
                  "sector_id": "14.03",
                  "industry_id": "14"
                },
                {
                  "label": "Public Relations Services",
                  "id": "14.03.003.02",
                  "level": "segment",
                  "parent_id": "14.03.003",
                  "classification": "GIC",
                  "since": "2025-11-11",
                  "status": "active",
                  "segment_code": "02",
                  "subsector_id": "14.03.003",
                  "sector_id": "14.03",
                  "industry_id": "14"
                }
              ],
              "sector_id": "14.03",
              "industry_id": "14"
            },
            {
              "label": "Scientific & Technical Services",
              "id": "14.03.004",
              "level": "subsector",
              "parent_id": "14.03",
              "classification": "GIC",
              "since": "2025-11-11",
              "status": "active",
              "segments": [],
              "sector_id": "14.03",
              "industry_id": "14"
            }
          ],
          "industry_id": "14"
        }
      ]
    }
  ]
};
  
  // Classification types
  function normalizeClassification(raw) {
    const industries = raw.industries.map((industry) => {
      const sectors = industry.sectors.map((sector) => {
        const subsectors = sector.subsectors.map((subsector) => {
          const segments = subsector.segments?.map((segment) => ({
            ...segment,
            subsector_id: subsector.id,
            sector_id: sector.id,
            industry_id: industry.id,
            classification: industry.classification,
          })) || [];
          return {
            ...subsector,
            sector_id: sector.id,
            industry_id: industry.id,
            classification: industry.classification,
            segments,
          };
        });
        return {
          ...sector,
          industry_id: industry.id,
          classification: industry.classification,
          subsectors,
        };
      });
      return {
        ...industry,
        sectors,
      };
    });
    return {
      dmcs_version: raw.dmcs_version,
      release_date: raw.release_date,
      description: raw.description,
      industries,
    };
  }
  
  class Classification {
    constructor() {
      this.data = normalizeClassification(classificationData);
    }
    
    get version() {
      return this.data.dmcs_version;
    }
    
    get releaseDate() {
      return this.data.release_date;
    }
    
    get description() {
      return this.data.description;
    }
    
    get industries() {
      return this.data.industries;
    }
    
    getById(id) {
      const parts = id.split('.');
      if (parts.length === 1) {
        return this.industries.find(i => i.id === id) || null;
      }
      if (parts.length === 2) {
        const industry = this.getById(parts[0]);
        if (!industry) return null;
        return industry.sectors.find(s => s.id === id) || null;
      }
      if (parts.length === 3) {
        const sector = this.getById(parts[0] + '.' + parts[1]);
        if (!sector) return null;
        return sector.subsectors.find(s => s.id === id) || null;
      }
      if (parts.length === 4) {
        // Handle segment ID (II.SS.SSS.SS)
        const subsector = this.getById(parts[0] + '.' + parts[1] + '.' + parts[2]);
        if (!subsector) return null;
        return subsector.segments?.find(s => s.id === id) || null;
      }
      return null;
    }
    
    search(query, caseSensitive = false) {
      const results = [];
      const searchQuery = caseSensitive ? query : query.toLowerCase();
      for (const industry of this.industries) {
        const industryLabel = caseSensitive ? industry.label : industry.label.toLowerCase();
        if (industryLabel.includes(searchQuery)) {
          results.push(industry);
        }
        for (const sector of industry.sectors) {
          const sectorLabel = caseSensitive ? sector.label : sector.label.toLowerCase();
          if (sectorLabel.includes(searchQuery)) {
            results.push(sector);
          }
          for (const subsector of sector.subsectors) {
            const subsectorLabel = caseSensitive ? subsector.label : subsector.label.toLowerCase();
            if (subsectorLabel.includes(searchQuery)) {
              results.push(subsector);
            }
            for (const segment of subsector.segments || []) {
              const segmentLabel = caseSensitive ? segment.label : segment.label.toLowerCase();
              if (segmentLabel.includes(searchQuery)) {
                results.push(segment);
              }
            }
          }
        }
      }
      return results;
    }
    
    filterByClassification(classification) {
      return this.industries.filter(i => i.classification === classification);
    }
    
    getGIC() {
      return this.filterByClassification('GIC');
    }
    
    getDIC() {
      return this.filterByClassification('DIC');
    }
    
    stats() {
      const totalSectors = this.industries.reduce((sum, ind) => sum + ind.sectors.length, 0);
      const totalSubsectors = this.industries.reduce(
        (sum, ind) => sum + ind.sectors.reduce((s, sec) => s + sec.subsectors.length, 0),
        0
      );
      const totalSegments = this.industries.reduce(
        (sum, ind) => sum + ind.sectors.reduce(
          (s, sec) => s + sec.subsectors.reduce(
            (ss, sub) => ss + (sub.segments?.length || 0),
            0
          ),
          0
        ),
        0
      );
      return {
        version: this.version,
        release_date: this.releaseDate,
        industries: this.industries.length,
        sectors: totalSectors,
        subsectors: totalSubsectors,
        segments: totalSegments,
        gic_industries: this.getGIC().length,
        dic_industries: this.getDIC().length,
      };
    }
  }
  
  // Expose to window
  window.DMCS_SDK = {
    Classification: Classification,
    taxonomy: new Classification()
  };
  
})(window);