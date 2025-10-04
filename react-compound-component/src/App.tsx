import "./App.css"
import { Tabs } from './components/tab';

const App = () => {
  return (
    <div className="main-container">
      <Tabs defaultValue="tab1">
        <Tabs.List>
          <Tabs.Tab value="tab1">Tab 1</Tabs.Tab>
          <Tabs.Tab value="tab2">Tab 2</Tabs.Tab>
          <Tabs.Tab value="tab3">Tab 3</Tabs.Tab>
        </Tabs.List>
        <Tabs.TabPannels>
          <Tabs.TabPannel value="tab1">
            <h1>Tab 1</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate nesciunt aliquam aperiam repudiandae, ducimus cumque!
              Itaque blanditiis voluptate minima sapiente facere. Sequi quos
              distinctio asperiores quidem iure magnam, ab neque adipisci. Fugit
              aperiam eaque quisquam, modi voluptates nam itaque laboriosam
              commodi, aut amet soluta dolorum voluptatum odio consequatur
              temporibus deleniti.
            </p>
          </Tabs.TabPannel>
          <Tabs.TabPannel value="tab2">
            <h1>Tab 2</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate nesciunt aliquam aperiam repudiandae, ducimus cumque!
              Itaque blanditiis voluptate minima sapiente facere. Sequi quos
              distinctio asperiores quidem iure magnam, ab neque adipisci. Fugit
              aperiam eaque quisquam, modi voluptates nam itaque laboriosam
              
            </p>
          </Tabs.TabPannel>
          <Tabs.TabPannel value="tab3">
            <h1>Tab 3</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate nesciunt aliquam aperiam repudiandae, ducimus cumque!
              Itaque blanditiis voluptate minima sapiente facere. Sequi quos
              distinctio asperiores quidem iure magnam, ab neque adipisci. Fugit
              aperiam eaque quisquam, modi voluptates nam itaque laboriosam
              commodi, aut amet soluta dolorum voluptatum odio consequatur
              temporibus deleniti. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste, doloribus!
            </p>
          </Tabs.TabPannel>
        </Tabs.TabPannels>
      </Tabs>
    </div>
  );
}

export default App