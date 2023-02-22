import {Component} from 'react'
import LanguageItem from './components/LanguageItem'
import './App.css'

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
    imageAltText: 'english',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
    imageAltText: 'tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
    imageAltText: 'telugu',
  },
]

// Replace your code here
class App extends Component {
  state = {activeId: languageGreetingsList[0].id}

  changeActiveId = activeId => {
    this.setState({activeId})
  }

  render() {
    const {activeId} = this.state
    const activeDetails = languageGreetingsList.find(
      each => each.id === activeId,
    )

    return (
      <div className="bg-cont">
        <div className="card">
          <h1 className="title">Multilingual Greetings</h1>
          <ul className="list-cont">
            {languageGreetingsList.map(each => (
              <LanguageItem
                item={each}
                key={each.id}
                isActive={each.id === activeId}
                changeActiveId={this.changeActiveId}
              />
            ))}
          </ul>
          <div className="out">
            <img
              src={activeDetails.imageUrl}
              alt={activeDetails.imageAltText}
              className="img"
            />
          </div>
        </div>
      </div>
    )
  }
}

export default App
