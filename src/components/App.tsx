import { Fragment } from "preact";
import { orbitLinks } from "../transformations/orbitLinks";
import { resume } from "../transformations/resume";
import type { WrapperComponent } from "../types/WrapperComponent";
import { Logo } from "./Logo";
import { OnlyPrint } from "./OnlyPrint";
import { OnlyScreen } from "./OnlyScreen";
import { OrbitContainer } from "./OrbitContainer";
import { OrbitItemList } from "./OrbitItemList";
import { OrbitNavigation } from "./OrbitNavigation";

// eslint-disable-next-line functional/functional-parameters
export const App: WrapperComponent = () => (
	<Fragment>
		<OnlyScreen class="bg-black circle-reveal-animation">
			<OrbitContainer>
				<OrbitNavigation>
					<OrbitItemList>{orbitLinks}</OrbitItemList>
				</OrbitNavigation>
			</OrbitContainer>
			<Logo />
		</OnlyScreen>
		<OnlyPrint>{resume}</OnlyPrint>
	</Fragment>
);

export default App;
