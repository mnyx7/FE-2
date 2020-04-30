window.onload = function () {

    fetch('https://gdg-ms-team.herokuapp.com/api/members')
        .then(res => res.json())
        .then(json => {
            var  team = document.getElementById('team')[0]
            renderMember(json)
        })


        const renderMember = members => {
        members.forEach(member => {
            

            team.innerHTML += `
            <div class="member">
                    <div class="photoOfMember">
                    <img src="${member.photo}" alt="${member.position}" />
                        <h1 class="name">${member.firstName} ${member.lastName}</h1>
                        <p class="position">${member.position}</p>
                        <div class="m-icons">
                            <a href="mailto:${member.email}" class="fas fa-envelope-square mymail"></a>
                            <a href="${member.linkedin}" class="fab fa-linkedin mylink"></a>
                            <a href="${member.github}" class="fab fa-github-square mygit"></a>
                        </div>
                    </div>
                    <div class="factAboutMember">
                        <p>Fact Fact Fact</p>
                    </div>
                </div>`

        });
    }
}
