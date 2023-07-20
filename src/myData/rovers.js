export const rovers = [
  {
    name: `Perseverance`,
    launch: `July 30, 2020, Launch Complex 41 at Cape Canaveral Air Force Station, Florida. `,
    landed: `February 18, 2021, Jezero Crater, Mars`,
    missionStatus: `Active`,
    size: {
      length: `10 feet ( 3 meters)`,
      heigth: `7 feet ( 2.2 meters)`,
      weigth: `2.260 pounds/1.025 kilograms`,
      width: `9 feet ( 2.7 meters)`,
    },
    distanceTravelled: `11.72 miles / 18.87 km`,
    speed: `0.12 km/h or 0.075 miles`,
    lifespan: `As of June 2023, it's been active 2 years, 4 months`,
    missionDescription: `The rover is searching for microbial fossils in rocks that formed. It is
     also looking for carbon-containing molecules called organics that form the building blocks of life on Earth.
     It is collecting soil and rock samples as it travels, and storing them in tubes `,
     quickFacts: {
        fact1: `Perseverance is a 1-ton, 6-wheeled Mars rover the size of a compact car.`,
        fact2: `Based on the same design as nuclear-powered Curiosity, Perseverance can operate through dust 
        storms that block sunlight required by solar-powered spacecraft.`,
        fact3: `Perseverance microphones recorded the first ever audio from another planet.
        Perseverance has recorded hours of sounds from the surface of Mars, helping scientists to make an 
        incredible discovery about the planets acoustics that there are two speeds of sound on Mars. `,
        fact4: `Mars atmosphere creates a distortion of sound, with higher-pitched sounds having a faster 
        speed than those with a lower frequency. So, depending on the frequency changes in a persons voice, 
        it may be quite difficult to hold a conversation on Mars!`,
        fact5: `As Perseverance descended towards the red planet, it carried precious cargo strapped 
        to its belly - a helicopter named Ingenuity.`,
        fact6: `Perseverance is equipped with 23 cameras, a laser, and upgraded instruments.`,
     },
     techSpecs: {
        cameras: `Total 23 cameras focusing on different tasks, images resolution is 0.82 milliradians per pixel.
        Mastcam-Z, a stereoscopic imaging system with the ability to zoom.`,
        wheels: `Rover has 6 wheels, each with its own individual motor.Size of 20.7 inch (52.5 cm) in 
        diameter.Made of titanium. 2 front and 2 rear wheels also have individual steering motors 
        which allows the vehicle to turn in place, a full 360 degrees.`,
        software: `The rover's computer uses the BAE Systems RAD750 radiation-hardened single board computer 
        based on a ruggedized PowerPC G3 microprocessor (PowerPC 750). The computer contains 128 megabytes of 
        volatile DRAM, and runs at 133 MHz. The flight software runs on the VxWorks Operating System, is written 
        in C and is able to access 4 gigabytes of NAND non-volatile memory on a separate card.`,
        powerSystem: `It carries a radioisotope power system, converts heat from the natural 
        radioactive decay of plutonium into electricity and charges 2 primary batteries.
        Unlike solar panels, the  thermoelectric power generator provides engineers with significant flexibility in operating the rover's 
        instruments even at night, during dust storms, and through winter.`,
        instruments: `Upgraded Robotic arm, bigger wheels, 23 hi-res cameras, 2 microphones, 3 antennas for communication, 
        sampling tubes. The primary UHF antenna can send data from the rover at a maximum rate of two megabits per second. Two slower
         X-band antennas provide communications redundancy. Perseverance's arm is longer and stronger, measuring 2.1 m (6 ft 11 in). 
         The arm hosts an elaborate rock-coring and sampling mechanism to store geologic samples from the Martian surface in 
         sterile caching tubes. There is also a secondary arm hidden below the rover that helps store the chalk-sized samples.`
     }
  },
  {
    name: `Curiosity`,
    launch: `November 26, 2011, Cape Canaveral Air Force Station, Florida `,
    landed: `August 6, 2012 at Gale Crater`,
    missionStatus: `Active`,
    size: {
      length: `8.9 feet( 2.7 meters)`,
      heigth: `7.2 feet ( 2.2 meters)`,
      weigth: `1982 pounds/899 kg`,
      width: `9.5 feet(2.9 meters)`,
    },
    distanceTravelled: `18.64 miles/ 30.00 km `,
    
    speed: ` 0.14 km/h or 0.08 miles`,
    lifespan: `Still operating, almost 11 years`,
    missionDescription: `Curiosity's mission is to determine whether the Red Planet ever was 
    habitable to microbial life. The rover, which is about the size of a MINI Cooper, is 
    equipped with 17 cameras and a robotic arm containing a suite of specialized laboratory-like tools and instruments.`,
    quickFacts: {
      fact1: ` Rover performed a tricky, daredevil 
        landing on Mars in 2012 -- a feat later described by the Mars Science 
        Laboratory team as Seven Minutes of Terror.A supersonic parachute needed to
         deploy to slow the spacecraft.But parachute was  far too fast for landing. 
         To solve the problem, engineers designed the assembly to cut off the parachute, 
         and use rockets for the final part of the landing sequence. `,
      fact2: `In June 2017, NASA announced Curiosity had a new software 
        upgrade that would allow it to pick targets by itself. The update, 
        called Autonomous Exploration for Gathering Increased Science (AEGIS), 
        represented the first time artificial intelligence was deployed on a faraway spacecraft.`,
      fact3: `Curiosity had a dangerous computer glitch just six months after landing that put the
         rover within an hour of losing contact with Earth`,
      fact4: `The Rover Environmental Monitoring Station measures the wind's speed and charts 
         its direction, as well as determines the temperature and humidity in the surrounding air. 
         Because of Insight lander shutdown, Curiosity is now taking all weather mesurements.`,
      fact5: `Rover also made the first definitive identification of organics on Mars,announced in 2014.
         Organics are considered life's building blocks, but do not necessarily point to the existence 
         of life as they can also be created through chemical reactions. `, 
    },
    techSpecs: {
        cameras: `Has 17 cameras with specific set of optics. Image Resolution from 0.82 to 2.1 milliradians per pixel`,
        wheels: ` Curiosity has 6 aluminium wheels measure 20 inches in diameter.Individual steering motors 
         allows the vehicle to turn in place, a full 360 degrees. Each wheel has cleats and is independently actuated and geared,
          providing for climbing in soft sand and scrambling over rocks. Each front and rear wheel can be independently steered, 
          allowing the vehicle to turn in place as well as execute arcing turns.`,
        software: `The two identical on-board rover computers, called Rover Compute Element (RCE) contain radiation hardened
         memory to tolerate the extreme radiation from space and to safeguard against power-off cycles. The computers run the
          VxWorks real-time operating system (RTOS). Each computer's memory includes 256 kB of EEPROM, 256 
          MB of DRAM, and 2 GB of flash memory.`,
        powerSystem: `Radioisotope power system. The power source generates 9 MJ (2.5 kWh) of electrical energy each day, 
        much more than the solar panels of the now retired Mars Exploration Rovers, which generated about 2.1 MJ (0.58 kWh) each day. 
        The electrical output from the MMRTG charges two rechargeable lithium-ion batteries. This enables the power subsystem to 
        meet peak power demands of rover activities when the demand temporarily exceeds the generator's steady output level. `,
        instruments: `Chemistry and Camera (ChemCam), Rover Environment Monitoring Station and Radiation Assessment Detector.`,
     }
  },
  {
    name: `Opportunity`,
    launch: `July 8, 2003 Cape Canaveral Air Force Station, Florida`,
    landed: `January 25, 2004`,
    missionStatus: `Completed`,
    size: {
      length: `1.6 meters (5.2 ft)`,
      heigth: `1.5 meters (4.9 ft)`,
      weigth: `180 kilograms (400 lb)`,
      width: `2.3 meters (7.5 ft)`,
    },
    distanceTravelled: `45.16 km (28.06 mi)`,
    
    speed: `0.18 km/h or 0.11 miles`,
    lifespan: `14 years, 11 months`,
    missionDescription: `Opportunity was the second of the two twin rovers launched 
        in 2003 to land on Mars and begin traversing the Red Planet in search of signs of ancient water.
        Mission highlights included the initial 90-sol mission, finding meteorites such as Heat Shield Rock 
        (Meridiani Planum meteorite), and over two years of exploring and studying Victoria crater. The rover
         survived moderate dust storms and in 2011 reached Endeavour crater, which has been considered as
          a second landing site.`,
    quickFacts: {
    fact1: ` Rover stopped communicating with Earth when a severe Mars-wide dust storm blanketed its 
            location in June 2018. After more than a thousand commands to restore contact, engineers in the
             Mission Control  made their last attempt to revive Opportunity Tuesday, February 13, 2019, to no avail. `,
    fact2: `Opportunity found evidence that Mars may once have been able to sustain microbial life.`,
    fact3: ` Rover took photographs  with mast-mounted cameras (about five feet or 1.5 meters off the ground) 
      providing 360-degree stereoscopic views of the terrain.`,
    fact4: `Opportunity also discovered small spheres of hematite nicknamed "blueberries" that formed late from
       rising, acidic groundwater. The rover found white veins of 
       the mineral gypsum in Endevour Crater- a telltale sign of water that traveled through underground fractures.`,
    fact5: `Opportunity encountered two mission-threatening dust storms that blocked sunlight from reaching its solar 
       panels. It survived a dust storm in 2007 by minimizing activities and maintaining enough power in its batteries
        to recover when the skies cleared. Unfortunately, the 2018 dust storm blotted out even more sunlight and kept 
        the skies above Opportunity dark about a month longer.`,
    fact6: `Opportunity recorded the first ever video taken of a dust devil on another planet`,
    },
    techSpecs: {
      cameras: `Panoramic, navigation, miniature thermal emission spectrometer and 2 Hazcams (Hazard Avoidance) with 120 degree of view 
      that provided additional data about rover sorroundings.`,
      wheels: `Made of aluminum, 10 inches (0.25 meters) in diameter, 6 motors, all-wheel-drive. 
      To keep mass down, Opportunity wheels skins are just 0.02 inch thick. Longest drive in one day: 721 ft.`,
      software: ` Opportunity's onboard computer uses a 20 MHz RAD6000 CPU with 128 MB of DRAM, 3 MB of DRAM and 3 MB of EEPROM. The rover's 
      operating temperature ranges from -40 to +40 °C (-40 to 104 °F) and radioisotope heaters provide a base level of heating,
       assisted by electrical heaters when necessary.`,
      powerSystem: `The rover used a combination of solar cells and a rechargeable chemical battery.
      At the start of the mission the solar panels could provide up to around 900 watt-hours (Wh) to recharge the battery 
      and power system in one Sol, but this could vary due to a variety of factors like seasonal winter and dust storms.`,
      instruments: `Robotic arm, microscopic imager, a rock-grinding tool, and infrared, gamma-ray, and alpha-particle spectrometers
       that analyzed the rocks, soil, and dust. `,
    }
  },
  {
    name: `Spirit`,
    launch: `June 10, 2003, Cape Canaveral Air Force Station, Florida `,
    landed: `January 4, 2004`,
    missionStatus: `Completed`,
    size: {
      length: `1.6 meters (5.2 ft)`,
      heigth: `1.5 meters (4.9 ft)`,
      weigth: ` 405 pounds or 185 kilograms`,
      width: `2.3 meters (7.5 ft)`,
    },
    distanceTravelled: `4.8 miles  (7.73 kilometers)`,
    
    speed: `0.18 km/h or 0.11 miles`,
    lifespan: `6 years, 2 months, 19 days `,
    missionDescription: `One of two rovers launched in 2003 to explore Mars and 
        search for signs of past life, Spirit far outlasted her planned 90-day mission, 
        lasting over six years. Among her myriad discoveries, Spirit found evidence that
         Mars was once much wetter than it is today and helped scientists better understand 
         the Martian wind.`,
    quickFacts: {
      fact1: `In 2009, Spirit became stuck in soft soil, its wheels
             unable to generate traction against the ground.
             Later another of Spirits six wheels stopped working. Mission was reformulated to stationary science platform.`,
      fact2: `In 2010 march, contact was lost with Spirit. And despite more than 1,300 commands sent to Spirit,
              NASA officially concluded its recovery efforts May 25, 2011. The most probable cause of the loss of contact 
              was the excessive cold that made its survival heaters ineffective.`,
      fact3: `Spirit and Opportunity faced massive dust storms that eroded their ability to operate effectively, mainly
       due to lack of power generated from the solar panels.`,
      fact4: ` About an 1.5h after landing and after the airbags deflated, the rover deployed its petal solar 
       panels and began relaying information via 2001 Mars Odyssey. Spirit immediately started transmitting spectacular
        images back to Earth.`,
      fact5: `Twin rovers were sent to opposite sides of Mars to locations that were suspected of having been affected
         by liquid water in the past.`,
    },
    techSpecs: {
      cameras: `Panoramic, Navigational, 2 Hazcams, Microscopic imager - obtained close-up, high-resolution images of rocks and soils.  `,
      wheels: `Six wheels on a rocker-bogie system enabled mobility over rough terrain. Each wheel had its own motor. 
      The vehicle was steered at front and rear and was designed to operate safely at tilts of up to 30 degrees`,
      software: ` Spirit's onboard computer uses a 20 MHz RAD6000 CPU with 128 MB of DRAM and 3 MB of EEPROM. The rover's 
      operating temperature ranges from -40 to +40 °C (-40 to 104 °F) and radioisotope heaters provide a base level of 
      heating, assisted by electrical heaters when necessary.`,
      powerSystem: `The rover uses a combination of solar cells and a rechargeable chemical battery. This class of rover
       has two rechargeable lithium batteries. Global dust storms in 2007 reduced power levels for Opportunity and Spirit 
       so much they could only run for a few minutes each day.`,
      instruments: `Magnets for collecting magnetic dust particles, rock abrasion tool, alpha particle x-ray spectrometer. `,
    }
  },
  {
    name: `Sojourner`,
    launch: `December 4, 1996 `,
    landed: `July 4, 1997`,
    missionStatus: `Completed`,   
    size: {
      length: `65 cm (26-inch)`,
      heigth: `30 cm (12-inch)`,
      weigth: `11.5 kilograms (25 lb)`,
      width: `48 cm (19-inch) `,
    },
    distanceTravelled: `100 metres (330 ft)`,
    
    speed: `0.024 km/h ( 0.015 miles )`,
    lifespan: `83 days`,
    missionDescription: `The first ever landed rover on Mars - Sojourner spent 10 times more of a planned 
        7-day mission exploring the 
        Martian terrain, snapping photographs and taking chemical, atmospheric and other measurements.`,
    quickFacts: {
      fact1: `Sojourner was only about the size of a microwave oven.`,
      fact2: ` It sent back more than 550 pictures of the Red Planet. `,
      fact3: `It could move at up 0.6 feet per minute on its six wheels, though it was not able to stray
       more than around 1,600 feet away from Pathfinder without risking problems with its communication.`,
       fact4: ` Its most striking features, however, were its flat topside covered in metallic blue solar panels, 
       which many thought made it look like a giant beetle, and its 6 small, spiky wheels`,
       fact5: `Sojourner took photos with low-resolution (0.018° per pixel) cameras and returned  many 
       fantastic images showing the rover trundling between rocks.Compared to the ultra-high-resolution
        images now being sent back by Perseverance, these photos were little more than snapshots taken
        by a tourist camera,`,
    },
    techSpecs: {
      cameras: `The rover was imaged on Mars by the base station's IMP camera system, which also helped determine where
       the rover should go. The rover had two monochrome cameras in front and a color camera at the rear. Each front
        camera had an array 484 pixels high by 768 wide. `,
      wheels: `The rover's wheels were made of aluminum and were 13 cm (5.1 in) in diameter and 7.9 cm (3.1 in) wide. 
      They had serrated, stainless steel tracks that could generate a pressure of 1.65 kPa (0.239 psi) in optimal conditions
       on soft ground.[25] No such need arose during the operational phase. Each wheel was driven by its own independent motor.
        The first and third wheels were used for steering. A six-wheel-steering configuration was considered, but this was too 
        heavy.As the rover rotated on itself, it drew a 74 cm (29 in) wide circle.`,
      software: `Sojourner's central processing unit (CPU) was an Intel 80C85 with a 2 MHz clock, addressing 64 kilobytes (Kb) of memory, 
      and running a cyclic executive. It had four memory stores; 64 Kb of RAM made by IBM for the main processor, 16 Kb of radiation-hardened 
      PROM made by Harris, 176 Kb of non-volatile storage made by Seeq Technology, and 512 Kb of temporary data storage made by Micron. 
      The electronics were housed inside the rover's warm electronics box (WEB).`,
      powerSystem: `Sojourner had solar panels and a non-rechargeable lithium-thionyl chloride battery that 
      could provide 150 watt-hours and allowed limited nocturnal operations. Once the batteries were depleted,
       the rover could only operate during the day. `,
      instruments: `The Ultra high frequency (UHF) radio modems operated in half-duplex mode, meaning they could either send or receive data
       but not both at the same time. The data was communicated in bursts of 2 kB.`,
    },
    imageUrl: ``,
  },
];


