import Button from "./Button";
import trackingButtonComponent from "./trackingButtonComponent";

const HoC = () => {
  const ButtonWithTracking = trackingButtonComponent(Button);
  return (
    <div>
      <h2>This is an example of Higher order Components.</h2>
      {/* <Button name="Login" /> */}
      <ButtonWithTracking name="Login" trackingInfo={{customerID:"1234567890", password:"hello@sece"}} />
    </div>
  );
};
export default HoC;