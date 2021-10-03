import './App.css';
import {AppRouter} from "./routes/routes";
import 'antd/dist/antd.css'
import { PageHeader } from 'antd';

function App() {
  return (
    <>
        <PageHeader
            className="site-page-header"
            // onBack={() => null}
            title="Emumba Task"
            subTitle="Users, profiles and posts"
        />
        <AppRouter/>
    </>
  );
}

export default App;
