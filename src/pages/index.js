import * as React from "react"
import styled from "@emotion/styled"
import buffer1 from "../images/buffer1.png"
import buffers from "../images/buffers.png"
import modMatrix from "../images/modMatrix.png"
import boidGran from "../images/boidGran.png"
import stepSequencer from "../images/stepSequencer.png"
import sequencer from "../images/sequencer.gif"
import particles from "../images/particles.gif"
import target1 from "../images/target1.png"
import spectrogram from "../images/spectrogram.png"
import gainSlider from "../images/gainSlider.png"
import grain from "../images/grain.png"
import target2 from "../images/target2.png"
import macros from "../images/macros.png"
import particleSystem from "../images/ParticleSystem.png"
import zplanes from "../images/zplanes.png"
import emitter1 from "../images/Emitter1.png"
import transport from "../images/transport.png"
import grainControl from "../images/granCommands.png"
import ParticleControl from "../images/ParticleCommands.png"
import FM from "../images/FM.png"
import LFOs from "../images/LFOs.png"
// import macroCommands from

// styles
const pageStyles = {
  fontSize: "12",
  color: "#232129",
  backgroundColor: "#F3F3F3",
  backgroundColor: "#CCCCCC",
  padding: 50,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

// data
const links = [
  {
    text: "Tutorial",
    url: "https://www.gatsbyjs.com/docs/tutorial/",
    description:
      "A great place to get started if you're new to web development. Designed to guide you through setting up your first Gatsby site.",
    color: "#E95800",
  },
  {
    text: "How to Guides",
    url: "https://www.gatsbyjs.com/docs/how-to/",
    description:
      "Practical step-by-step guides to help you achieve a specific goal. Most useful when you're trying to get something done.",
    color: "#1099A8",
  },
  {
    text: "Reference Guides",
    url: "https://www.gatsbyjs.com/docs/reference/",
    description:
      "Nitty-gritty technical descriptions of how Gatsby works. Most useful when you need detailed information about Gatsby's APIs.",
    color: "#BC027F",
  },

  {
    text: "Conceptual Guides",
    url: "https://www.gatsbyjs.com/docs/conceptual/",
    description:
      "Big-picture explanations of higher-level Gatsby concepts. Most useful for building understanding of a particular topic.",
    color: "#0D96F2",
  },
  {
    text: "Plugin Library",
    url: "https://www.gatsbyjs.com/plugins",
    description:
      "Add functionality and customize your Gatsby site or app with thousands of plugins built by our amazing developer community.",
    color: "#8EB814",
  },
  {
    text: "Build and Host",
    url: "https://www.gatsbyjs.com/cloud",
    badge: true,
    description:
      "Now you’re ready to show the world! Give your Gatsby site superpowers: Build and host on Gatsby Cloud. Get started for free!",
    color: "#663399",
  },
]

// markup
const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <Content>
        <div>
          <MainTitle>BoidGran - Granular Particle Synthesizer</MainTitle>
          <Image src={boidGran}></Image>
          <p>
            BoidGrain is a Max/MSP instrument based on Particle Synthesis, an
            extended technique of granular synthesis that implements a
            physics-based particle system to map parameter control over
            microsound audio grains.
          </p>
        </div>
        <Section>Background</Section>
        <div>
          <Title>Granular Synthesis</Title>
          <p>
            Dennis Gabor, Xenakis, Curtis Roads, The first real-time granular
            synthesis was achieved by Barry Truax in 1986.
          </p>
          <Image src={grain} />
          <p>
            A waveform is seperated into microtime (1-50ms) "grains", which are
            enveloped and then cyclically repeated much like a traditional
            oscillator, but with a much wider range of sonic results due to the
            internal variety within the selected waveform rearranged via grain
            dispersal.
          </p>
          <p>
            At the microtime domain, time and frequency are interdependent
            according to the law of uncertainty in quantum mechanics, whereby a
            windowed sound in time is inversely proportional to its frequency
            bandwidth. Therefore, the envelope shape of a grain's window is
            reflected in the shape of its spectral density.
          </p>
          <p>
            beyond the 20Hz threshold, discrete impulses can fuse to create a
            pitch, below (greater than 50ms) they are seperate elements.
            quasi-synchronous.
          </p>
        </div>
        <div>
          <Title>Boids</Title>
          <p>
            A particle system is a game physics technique that implements pixels
            or sprite objects within a 2 or 3-dimensional space to simulate
            non-linear dynamic (or "chaotic") phenomena such as fire, smoke,
            clouds, or explosions. Typically the behavior of particles are
            dictated by a physics system upon which further algorithmic control
            can be implemented.{" "}
          </p>
          <p>
            The instantaneous value of individual particle parameters can often
            be considered "fuzzy" or quasi-random, falling within a central
            range but reflecting the indeterminancy of natural systems. This
            characteristic closely aligns with the Heisenberg Uncertainty
            principle, which states that the position and speed of an electron
            are unknowable at the quantum level, and parallels the behavior of
            microsound previously detailed in the granular section. It is this
            shared relationship which provides an exceptionally robust mapping
            of particle location to grain generation, since speed is the rate of
            change in position while frequency is the rate of change in phase.
          </p>
          <p>
            "Boids" are an artificial life simulation devised by Craig Reynolds
            to replicate swarm dynamics in natural systems such as bird
            flocking. The classic boids algorithm can display "emergent" or
            self-organizing behavior by adhering to three simple rules:
          </p>
          <ul>
            <li>Separation: steer to avoid overcrowding local flockmates</li>
            <li>
              Alignment: steer towards the average heading of local flockmates{" "}
            </li>
            <li>
              Cohesion: steer towards the average central mass position of local
              flockmates
            </li>
          </ul>
        </div>

        <Section>Implementation</Section>

        <div>
          <Title>Particle System</Title>
          <Image src={particles}></Image>
          <div>
            <p>
              The particle system was created entirely in Jitter, an OpenGL
              ecosystem within Max. All graphical events are contained within a
              3-dimensional cube. 16 yellow particle spheres inhabit the cube
              container, along with the target sphere, emitter cube, and z-plane
              planes. The waveform of buffer 1, once loaded, is formatted in
              green along the z axis. The waveform of buffer 2 is formatted in
              magenta along the bottom on the x-axis. Camera location can be
              adjusted with up, down, left, right movement by pressing the
              respective keys q, z, a, and d keys, and zoomed in and out with
              the w and s keys.
            </p>
          </div>
          <div>
            <H1>Particle Controls</H1> <Image src={ParticleControl}></Image>
            <p>The particle system is controlled by 8 main parameters:</p>
            <ul>
              <li>Separate dictates distance between neigbors</li>
              <li>Distribute adjusts alignment between neighbors</li>
              <li>Force scales the influence of gravity on velocity</li>
              <li>Speed determines the per-frame particle velocity</li>
              <li>
                Gravity is the most determinant of attraction behavior;
                <br /> a positive value increases attraction, a negative value
                creates avoidance
              </li>
              <li>
                Blur adds quasi-random fractal turbulence to the particle
                positions
              </li>
              <li>
                Lifetime dictates the length of time a particle will remain
                within the cube{" "}
              </li>
              <li>
                Emit speed determines the rate of particle creation from the
                emitter position
              </li>
            </ul>
            <p>
              The Target, Emitter, and Z-plane buttons enable the functionality
              detailed in the following sections. Particles "bounce" off the
              cube boundaries by default, but can be enabled to 'wrap' to the
              other side of the cube if boundaries are exceeded.
            </p>
          </div>

          <div>
            <H1>Target</H1>
            <Image src={target2}></Image>
            <Image src={target1}></Image>

            <p>
              The target attracts particles by adhering to Newtonian law of
              universal gravitation, whereby the force applied to object is the
              product of gravity and mass. The target is represented by the
              silver sphere, and can be moved in the three dimension space by
              adjusting axis values independently, or by 2d cartesian mapping
              from the node UI. The target can also be autonomously moved by
              selected a function from the umenu, the speed of which controlled
              by the speed knob.
            </p>
          </div>
          <div>
            <H1>Emitter</H1>
            <Image src={emitter1}></Image>
            <p>
              The emitter, represented by the silver cube, features similar
              controls to the target attractor, yet its relation to particles is
              nearly its opposite. With the emitter button enabled, particles
              are created at the position of the emitter in relation to the
              lifespan value.
            </p>
          </div>
          <div>
            <H1>Z-Planes</H1>
            <Image src={zplanes}></Image>
            <p>
              The two adjustable Z-planes afford precision control over the
              maximum and minimum location of particle grains. When enabled,
              particles bounce off the boundary of the z-plane and reverse
              direction. Single-point scrubbing can be achieved by activating
              both planes and maximizing the position of plane 1, thereby
              "trapping" the particles at the position of plane 2.
            </p>
          </div>
          <div>
            <H1>Macro Commands</H1>
            <Image src={macros}></Image>
            <p>
              Three macro commands can initiate immediate gestural behavior from
              all particles.
              <ul>
                <li>
                  Freeze slows particle velocity to a near-halt to create a
                  granular drone.
                </li>
                <li>
                  Swarm gathers all particles together and surround the target
                  if enable.
                </li>
                <li>
                  {" "}
                  Flee disperses particles to the boundaries of the cube.
                </li>
              </ul>
            </p>
          </div>
        </div>

        <Title>Granulation</Title>

        <div>
          <H1>Buffers</H1>
          <Image src={buffers}></Image>
          <p>
            the buffer is the selected waveform sample, the phase of which will
            be cycled synchronously to create grain clouds. the granular engine
            is a 16-voice
          </p>

          <p>
            the second buffer view displays another grain buffer, this one with
            the expressed purpose of convolution, the FFT cross-synthesis
            interpolation between two waveforms.
          </p>

          <p>
            the third buffer view displays the grain window, which is the
            envelope applied to the grain to shape its amplitude and smoothly
            interpolate between consecutive grains. The guassian envelope is the
            default window.
          </p>
        </div>
        <div>
          <H1>Grain Control</H1>
          <Image src={grainControl}></Image>
          <div>
            Grains can be individually modulated in playback pitch, speed,
            duration, or pan-pot spatialization. The value of each parameter can
            be mapped to the particle position on the x, y, or z axis, The
            grain-start and pan1 parameters are respectively mapped to the z and
            x axis by default.
            <ul>
              <li>
                Frequency determines the play. crucially, if grain frequency is
                unmapped to an axis (ie. "off"), synchronous granulation is
                observed with all 16 grains cycling at the same constact
                frequency. asychronous. If frequency exceeds 20Hz (the 50ms
                microsound threshold), a fused pitch can be heard. at
                frequencies below 20Hz(50ms+) grains are observed as seperate
                rhythmic sound objects.{" "}
              </li>
            </ul>
          </div>
        </div>
        <div>
          <Title>Modulation</Title>

          <div>
            <H1>LFOs</H1>
            <Image src={LFOs}></Image>
            <p>
              The source of signal modulation are three lfos, two traditional
              and one function generator. The polarity of all LFOs can be set to
              unipolar positive, unipolar negative, or bipolar, with the option
              to invert the signal. The cyclic pattern of the first two LFOs can
              be set to sine, ramp up, ramp down, triangle, square, and sample +
              hold. The cyclic function of LFO3 can be adjusted by the
              breakpoints, with its time domain adjustable by manual entry
              (100ms by default).
            </p>
          </div>
          <div>
            <H1>Modulation Matrix</H1>
            <Image src={modMatrix}></Image>
            <p>
              The modulation matrix allows signal rerouting from any of the
              three lfos to any of 40 real-time parameters (including other
              LFOs), providing full modular control over the synthesis engine
              and particle system.
            </p>
          </div>
          <div>
            <H1>Motion Sequencer</H1>
            <Image src={sequencer}></Image>
            <p>
              The three particle system macros can be controlled by respective
              variable-length step-sequencers. Sequences can be played up, down,
              or up-down, and step length can range from 1-16. Step time can be
              controlled by milleseconds or global note value.
            </p>
          </div>

          <div>
            <H1>Frequency Modulation</H1>
            <Image src={FM}></Image>
            <p>frequency</p>
          </div>
          <div>
            <H1>Global Transport</H1>
            <Image src={transport}></Image>
            <p>
              The global transport can be enabled to providing a synchronized
              timescale for time-dependent functions such as the lfo rate, step
              sequence speed, amplitude envelope triggering, and particle system
              playback triggers. The global tranport is set to off by default
              with a tempo of 120 BPM.
            </p>
          </div>
          <div>
            <H1>Playstation 5 DualSense Integration</H1>
            <Image src={transport}></Image>
            <p>
              The particle system controls are compatible with the Playstation 5
              Dualsense controller. This interface mapping is particularly
              useful in applying joystick control over target and emitter
              positions
            </p>
          </div>
        </div>
        <Title>Output</Title>
        <div>
          <H1>Gain Slider</H1>
          <Image src={gainSlider}></Image>
          <p>
            Displays the current gain in dB for all 16 channels of audio. The
            default channel count is stereo but 4 channel output can be enabled
            for quadraphonic spatialization.
          </p>
        </div>
        <div>
          <H1>Spectrogram</H1>
          <Image src={spectrogram}></Image>
          <p>
            An FFT spectrogram of the combined 16 channels of audio frequency
            spectral variation over time. The display is logarithmically scaled
            to reflect the logarithmical stimulus response of hearing{" "}
          </p>
        </div>
        <div>
          <Title>Summary</Title>
          <p>capable. future interpolation</p>
        </div>
        <Title>Sources</Title>
        <ul>
          <li>
            Reynolds, C.W. (1987). Flocks, herds and schools: A distributed
            behavioral model. Proceedings of the 14th annual conference on
            Computer graphics and interactive techniques.
          </li>
          <li>Schiffman, D. (2012). The Nature of Code. D Schiffman</li>
          <li>Roads, C. (2001). Microsound. MIT Press. </li>
          <li>
            Truax, B. (1988) Real-time granular synthesis with a digital signal
            processor. Computer Music Journal, 12(2), 14-26
          </li>
          <li>
            Gabor, D. (1947) Acoustical quanta and the theory of hearing.
            Nature, 159(4044), 591-594
          </li>
          <li>
            Henke, R. (2013-2017){" "}
            <a href="https://monolake.de/technology/granulator.html">
              Granulator II
            </a>
          </li>
          <li>
            Sakonda, N. (2011){" "}
            <a href="https://web.mac.com/nsakonda/">SugarSynth</a>{" "}
          </li>
          <li>
            Foderano. Amazing Max Stuff. Youtube.{" "}
            <a href="https://www.youtube.com/c/AmazingMaxStuff">
              https://www.youtube.com/c/AmazingMaxStuff
            </a>
          </li>
          <li>
            Wakefield, G. "Windowing Formulas." Cycling74 web forum, 19 November
            2009.
            <a href="https://cycling74.com/forums/windowing-formulasagorithms/replies/1#reply-58ed1f7d6908cf22c8388f9d">
              https://cycling74.com/forums/windowing-formulasagorithms/replies/1#reply-58ed1f7d6908cf22c8388f9d
            </a>
          </li>
          <li>
            Taylor, G. "LFO Tutorial 4: Building Complexity." Cycling74, 19 June
            2009{" "}
            <a href="https://cycling74.com/tutorials/lfo-tutorial-4-building-complexity/">
              https://cycling74.com/tutorials/lfo-tutorial-4-building-complexity/
            </a>
          </li>
          <li>Blackwell, T.</li>
        </ul>
      </Content>
    </main>
  )
}

const Content = styled.div`
  max-width: 900px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: auto;
`

const Section = styled.section`
  font-size: 22px;
  text-decoration: underline;
  margin-bottom: 24px;
`

const Title = styled.div`
  font-weight: bold;
  font-size: 20px;
  color: #578726;
`

const H1 = styled.h4`
  font-style: italic;
`

const Image = styled.img`
  max-height: 250px;
  max-width: 80%;
`

const MainTitle = styled(Title)`
  font-size: 26px;
  text-decoration: underline;
`

export default IndexPage
