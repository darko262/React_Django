import { Private } from 'components/privacidad/privacidad'
import Footer from '../../components/navigation/Footer'
import Navbar from '../../components/navigation/Navbar'
import Layouts from '../../hocs/layouts/Layouts'

function Politica() {
	return (
		<Layouts>
			<Navbar />
			<Private />

			<Footer />
		</Layouts>
	)
}
export default Politica
