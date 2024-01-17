import { TerminoDeServicio } from 'components/privacidad/privacidad'
import Footer from '../../components/navigation/Footer'
import Navbar from '../../components/navigation/Navbar'
import Layouts from '../../hocs/layouts/Layouts'



function Terminos() {
	

	return (
		<Layouts>
			<Navbar />
			<TerminoDeServicio />

			<Footer />
		</Layouts>
	)
}
export default Terminos
