import { Component } from 'react'
import Child from './Child';

type CustomValue = any;

interface Props {
   propA: CustomValue;
}

class Parent extends Component<Props> {
   constructor(props: Props) {
      super(props);
      console.log("Inside Parent Constructor...");
   }

   componentDidMount(): void {
      console.log("Parent Mounted");
   }

   componentWillUnmount(): void {
      console.log("Parent Unmounted");
   }

   render() {
      console.log("Inside Parent Render ")
      return <div>
         <h2>Hello I am parent</h2>
         <Child propA="one" />
         <Child propA="two" />
      </div>
   }

}

export default Parent;

