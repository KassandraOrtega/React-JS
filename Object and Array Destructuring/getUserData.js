function getUserData(player){
    return Promise.all([
        getProfile(player),
        getRepos(player)
    ]).then(([profile, repos]) => ({profile, repos})
}
        /*var profile = data[0];
        var repos = data[1];
        
        var [profile, repos] = data;
    
        return {
            profile: profile,
            repos: repos
        }
    })
}*/
