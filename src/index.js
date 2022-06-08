import '../styles/main.scss'

document.getElementById('download').onclick = function () {
    var element = document.getElementById('tablePDF')

    var opt = {
        margin: 0.2,
        filename: 'tsunami_allergen_list.pdf',
        image: {
            type: 'svg | jpg | png',
            quality: 5
        },
        html2canvas: {
            scale: 5
        },
        jsPDF: {
            unit: 'in',
            format: 'letter',
            orientation: 'landscape'
        }
    }

    html2pdf().set(opt).from(element).save()
}