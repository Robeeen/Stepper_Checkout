import './App.css'
import Grid from './components/Grid'
import Stepper from './components/Stepper'

const CheckOut_Steps = [
  {
      name: "Customer Info",
      Components: () => <div>Provide your contact details</div>,
  },

  {
      name: "Shipping Info",
      Components: () => <div>Enter your shipping address</div>,
  },

  {
      name: "Payment Process",
      Components: () => <div>Complete the Payment Process</div>,
  },

  {
      name: "Delivered",
      Components: () => <div>The product has been Delivered</div>
  },
]


function App() { 

  return (
    <>
      <div>
        <Stepper stepConfig={CheckOut_Steps} />
        {/* <Grid /> */}
        </div>
    </>
  )
}

export default App
