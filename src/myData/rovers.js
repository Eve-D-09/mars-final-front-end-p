export const rovers = [
  {
    name: `Perseverance`,
    launch: `July 30, 2020, Launch Complex 41 at Cape Canaveral Air Force Station, Florida. `,
    landed: `February 18, 2021, Jezero Crater, Mars`,
    missionStatus: `Active`,
    size: {
      lenght: `10 feet ( 3 meters)`,
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
        cameras: `Total 23 cameras focusing on different tasks, images resolution is 0.82 milliradians per pixel.`,
        wheels: `Rover has 6 wheels, each with its own individual motor.Size of 20.7 inch (52.5 cm) in 
        diameter.Made of titanium. 2 front and 2 rear wheels also have individual steering motors 
        which allows the vehicle to turn in place, a full 360 degrees.`,
        software: `Radiation-hardened central processor, perates at up to 200 megahertz speed, 2 gb of flash memory.`,
        powerSystem: `It carries a radioisotope power system, converts heat from the natural 
        radioactive decay of plutonium into electricity and charges 2 primary batteries.`,
        instruments: `Upgraded Robotic arm, bigger wheels, 23 hi-res cameras, 2 microphones, 3 antennas for communication, sampling tubes.`
     }
  },
  {
    name: `Curiosity`,
    launch: `November 26, 2011, Cape Canaveral Air Force Station, Florida `,
    landed: `August 6, 2012 at Gale Crater`,
    missionStatus: `Active`,
    size: {
      lenght: `8.9 feet( 2.7 meters)`,
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
         allows the vehicle to turn in place, a full 360 degrees. `,
        software: `Radiation-hardened central processor,  up to 200 megahertz speed,2 GB of flash memory`,
        powerSystem: `Radioisotope power system. Produces slightly over 100 watts, 2 lithium ion rechargeable batteries`,
     }
  },
  {
    name: `Opportunity`,
    launch: `July 8, 2003 Cape Canaveral Air Force Station, Florida`,
    landed: `January 25, 2004`,
    missionStatus: `Completed`,
    size: {
      lenght: `1.6 meters (5.2 ft)`,
      heigth: `1.5 meters (4.9 ft)`,
      weigth: `180 kilograms (400 lb)`,
      width: `2.3 meters (7.5 ft)`,
    },
    distanceTravelled: `45.16 km (28.06 mi)`,
    
    speed: `0.18 km/h or 0.11 miles`,
    lifespan: `14 years, 11 months`,
    missionDescription: `Opportunity was the second of the two twin rovers launched 
        in 2003 to land on Mars and begin traversing the Red Planet in search of signs of ancient water.`,
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
    }
  },
  {
    name: `Spirit`,
    launch: `June 10, 2003, Cape Canaveral Air Force Station, Florida `,
    landed: `January 4, 2004`,
    missionStatus: `Completed`,
    size: {
      lenght: `1.6 meters (5.2 ft)`,
      heigth: `1.5 meters (4.9 ft)`,
      weigth: ` 405 pounds or 185 kilograms`,
      width: `2.3 meters (7.5 ft)`,
    },
    distanceTravelled: `4.8 miles  (7.73 kilometers)`,
    
    speed: `0.18 km/h or 0.11 miles`,
    lifespan: `6 years, 2 months`,
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
  },
  {
    name: `Sojourner`,
    launch: `December 4, 1996 `,
    landed: `July 4, 1997`,
    missionStatus: `Completed`,
    size: {
      lenght: `65 cm (26-inch)`,
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
    imageUrl: ``,
  },
];

//  the link to count from past to know: https://codepen.io/RyanNiu/pen/GNYbwY dateCountUP
