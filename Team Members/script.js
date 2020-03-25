window.onload = function () {

    fetch('./response.json')
        .then(res => res.json())
        .then(json => {
            var  team = document.getElementsByClassName('team')[0]
            renderMember(json)
        })


        const renderMember = records => {
        records.forEach(record => {
            

            team.innerHTML += `
            <div class="member">
                    <div class="face photo">
                    <img src="${record.photo}" alt="${record.position}" />
                        <h1 class="name">${record.firstName} ${record.lastName}</h1>
                        <p class="position">${record.position}</p>
                        <div class="m-icons">
                            <a href="mailto:${record.email}" class="fas fa-envelope-square mymail"></a>
                            <a href="${record.linkedin}" class="fab fa-linkedin mylink"></a>
                            <a href="${record.github}" class="fab fa-github-square mygit"></a>
                        </div>
                    </div>
                    <div class="face info">
                        <p>Fact Fact Fact</p>
                    </div>
                </div>`

        });
    }
}
