import { Component } from "react";
import Parent from "./LifeCycle/Parent";

type CustomValue = any;

interface Props {
   propA: CustomValue;
}

class LifeCycle extends Component<Props> {

   constructor(props: Props) {
      super(props)
      console.log("Inside LifeCycle Constructor...");
   }

   componentDidMount(): void {
      console.log("LifeCycle Mounted...");
   }

   componentWillUnmout(): void {
      console.log("LifeCycle Unmounted...");
   }

   render() {
      console.log("Inside LifeCycle Render...");
      return <div>
         <h1>Hello I m Grand Parent</h1>
         <Parent propA="" />
         <Parent propA="" />
      </div>
   }
}

export default LifeCycle;