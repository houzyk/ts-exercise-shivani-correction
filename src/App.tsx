import './App.css';
import { Accordion } from './Accordion-Component';
import { accordionData } from './content';
import './styles.css';

const App = () => {
  return (
    <div className='outer-container'>
      {
        accordionData.map(({ title, content }, index) => (
          <Accordion key={title + index} title={title || ''} content={content || ''}/>
      ))}
    </div>
  );
}

export default App;
