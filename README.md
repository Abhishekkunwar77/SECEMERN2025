# React Flow Org Chart
![Recording](https://github.com/randomdrake/react-flow-org-chart/blob/main/public/recording.gif?raw=true)

👋 **Hello!** Welcome to a little proof of concept I put together to showcase and practice skills with:

* React
* TypeScript
* JavaScript
* JSX
* Tailwind
* React Flow
* Vite

♻️ This is a straightforward fake org chart generator. It does the following:

* Creates a fake org chart given the number of employees
* Lets you draw org charts vertically or horizontally
* Creates realistic-ish looking organizations with a CEO on the top, managers beneath, and teams of 1-7 people underneath them
* Regenerates with new people every time you redraw / load
* Uses [Faker](https://github.com/faker-js/faker) to generate names, titles, and profile images
* Utilizes [React Flow](https://reactflow.dev/) and the [Dagre](https://github.com/dagrejs/dagre) library for the tree layouts

## 🏃 Running the App
`npm install` - Install the dependencies

`npx tailwindcss -i ./src/input.css -o ./public/output.css --watch` - Build the Tailwind CSS

`npm run dev` - Run the program using Vite

## 📸 Screenshots
Horizontal Layout:

![Horizontal Layout](https://github.com/randomdrake/react-flow-org-chart/blob/main/public/screenshot-horizontal.png?raw=true)

Vertical Layout:

![Vertical Layout](https://github.com/randomdrake/react-flow-org-chart/blob/main/public/screenshot-vertical.png?raw=true)

Detail:

![Detail](https://github.com/randomdrake/react-flow-org-chart/blob/main/public/screenshot-detail.png?raw=true)

## 🪪 License

> Copyright (c) 2024 David Drake
> 
> Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at
>
> http://www.apache.org/licenses/LICENSE-2.0
>
> Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.

## 👨‍💻 Author

David Drake

[@randomdrake](https://github.com/randomdrake) | [LinkedIn](https://www.linkedin.com/in/randomdrake)