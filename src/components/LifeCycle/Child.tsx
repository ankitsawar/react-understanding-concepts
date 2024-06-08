import { Component } from "react";

type CustomValue = any;
interface Props {
   propA: CustomValue
}

class Child extends Component<Props> {
   constructor(props: Props) {
      super(props);
      console.log("Inside Child Constructor... ", props.propA);
   }

   componentDidMount(): void {
      console.log("Child Mounted...");
   }

   componentWillUnmount(): void {
      console.log("Child Unmounted... ");
   }

   render() {
      console.log("Inside Child Render...");
      return <h1>Hello I am Child</h1>
   }
}


export default Child;