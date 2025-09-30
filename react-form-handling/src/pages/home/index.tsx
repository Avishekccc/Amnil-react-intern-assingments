import CustomWrapper from '../../components/common/wrapper'
import Form from '../../components/common/form'
import "../home/style.css"

const Home = () => {
  return (
    <div className="home-container">
      <CustomWrapper className="wrapper-container">
        <Form />
      </CustomWrapper>
    </div>
  );
}

export default Home