function fetchRepos({language='All', minStars=0, maxStars='', createdBefore='', createdAfter=''}){
    //language = language || 'All';
    //minStars = minStars || 0;
    //maxStars = maxStars || '';
    //createdBefore = createdBefore || '';
    //createdAfter = createdAfter || '';
}

//fetchRepos('JavaScript', 100, null, new Date('01/01/2017').getTime(), null);

fetchRepos({
    language: 'JavaScript',
    //maxStars: null,
    //createdBefore: null, 
    createdAfter: new Date('01/01/2017').getTime(),
    minStars: 100
})