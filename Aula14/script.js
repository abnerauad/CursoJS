function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.querySelector('input#txtano')
    var res = document.querySelector('div#res')

    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('Verificar os dados preenchidos!')
    } else {
        var sex = document.getElementsByName('radio')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if(sex[0].checked){
            genero = 'Masculino'
            if (idade < 12) {
                img.src = 'child-m.jpg'
            } else if(idade < 18) {
                img.src = 'teen-m.jpg'
            } else if(idade < 50){
                img.src = 'adult-m.jpg'
            } else {
                img.src = 'eldery-m.jpg'
            }
        } else if(sex[1].checked){
            genero = 'Feminino'
            if (idade > 1 && idade < 12) {
                img.src = 'child-f.jpg'
            } else if(idade > 12 && idade < 18) {
                img.src = 'teen-f.jpg'
            } else if(idade > 18 && idade < 50){
                img.src = 'adult-f.jpg'
            } else {
                img.src = 'elder-f.jpg'
            }
        }
    }
    res.innerHTML = `Você é do sexo <strong>${genero}</strong> e tem <strong>${idade} anos</strong>.`
    res.appendChild(img)

}