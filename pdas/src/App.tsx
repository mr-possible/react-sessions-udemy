import 'bulma/css/bulma.css'

import { ReactElement } from 'react'
import ProfileCard from './ProfileCard'
import AlexaImg from './images/alexa.png'
import CortanaImg from './images/cortana.png'
import SiriImg from './images/siri.png'

function App(): ReactElement {
  return (
    <div>
      <section className="hero is-link">
        <div className="hero-body">
          <p className="title">Personal Digital Assistants</p>
        </div>
      </section>
      <div className='container'>
        <section className='section'>
          <div className='columns'>
            <div className='column is-3'>
              <ProfileCard
                title="Alexa"
                handle="@alexa99"
                image={AlexaImg}
                content="created by Amazon."
              />
            </div>
            <div className='column is-3'>
              <ProfileCard
                title="Cortana"
                handle="@cortana32"
                image={CortanaImg}
                content="created by Microsoft."
              />
            </div>
            <div className="column is-3">
              <ProfileCard
                title="Siri"
                handle="@siri19"
                image={SiriImg}
                content="created by Apple."
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default App
