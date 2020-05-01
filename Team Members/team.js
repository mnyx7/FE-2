window.onload = function () {
    fetch('https://ms-team-gdg.herokuapp.com/api/members')
        .then(res => res.json())
        .then(json => {
            var team = document.getElementsByClassName('team')[0]
            renderMember(json)
        })        
    const renderMember = records => {
        records.forEach(record => {
            team.innerHTML += `
            <div class="member">
                    <div class="face photo">
                    <img id="photo" alt="${record.position}" />
                        <h1 class="name">${record.firstName} ${record.lastName}</h1>
                        <p class="position">${record.position}</p>
                        <p>${record.email}</p>
                        <div class="m-icons">
                            <a href="mailto:${record.email}" target="_blank" class="fas fa-envelope-square mymail"></a>
                            <a href="${record.linkedin}" target="_blank"  class="fab fa-linkedin mylink"></a>
                            <a href="${record.github}" target="_blank"  class="fab fa-github-square mygit"></a>
                        </div>
                    </div>
                    <div class="face info">
                        <p>Fact ${record.fact}</p>
                    </div>
                </div>`

        });
    }
}
