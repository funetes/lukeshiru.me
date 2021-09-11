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
	<>
		<OnlyScreen class="bg-white dark:bg-black">
			<OrbitContainer>
				<OrbitNavigation>
					<OrbitItemList>{orbitLinks}</OrbitItemList>
				</OrbitNavigation>
			</OrbitContainer>
			<Logo />
		</OnlyScreen>
		<OnlyPrint>{resume}</OnlyPrint>
	</>
);

export default App;
