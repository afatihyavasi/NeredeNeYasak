import './styles/RiskLevels.css';
const RiskLevelOne = (props) => {
    return ( 
        
        <table className = 'r-container'>
            <tr className = 'haftosonu c-flex'>
                <td>Hafta Sonu Sokağa Çıkmak </td>
                <td className = "green" >Serbest</td>
            </tr>
            <tr className = 'aksam c-flex '>
                <td>Aksam Sokağa Çıkmak </td>
                <td className = "red">Yasak (21.00-05.00)</td>
            </tr>
            <tr className = 'yas c-flex'>
                <td>+65 yaş ve 20- yaş</td>
                <td className = "green">Serbest</td>
            </tr>
            <tr className = 'okul-oncesi c-flex'>
                <td>Okul öncesi eğitim</td>
                <td className = "green">Serbest</td>
            </tr>
            <tr className = 'ilkokul c-flex'>
                <td>İlkokullarda eğitim</td>
                <td className = "green">Serbest</td>
            </tr>
            <tr className = 'sinav-senesi c-flex'>
                <td>8 ve 12. sınıflar</td>
                <td className = "green">Serbest</td>
            </tr>
            <tr className = 'ortaokul c-flex'>
                <td>Ortaokullarda eğitim</td>
                <td className = "green">Serbest</td>
            </tr>
            <tr className = 'lise c-flex'>
                <td>Liselerde eğitim</td>
                <td className = "green">Serbest</td>
            </tr>
            <tr className = 'yeme-icme c-flex'>
                <td>Kafeler/Restoranlar</td>
                <td className = "orange">07.00-19.00 arasında %50 kapasite</td>
            </tr>
            <tr className = 'spor c-flex '>
                <td>Halı saha/Yüzme Havuzları</td>
                <td className = "orange">09.00-19.00 arası serbest</td>
            </tr>
            <tr className = 'nikah c-flex '>
                <td>Nikah Salonları</td>
                <td className = "orange">100 kişiye kadar 1 saat</td>
            </tr>
            <tr className = 'toplantı c-flex '>
                <td>Genel Kurullar</td>
                <td className = "orange">300 kişiye kadar</td>
            </tr>

        </table>
    
     );
}
export default RiskLevelOne;