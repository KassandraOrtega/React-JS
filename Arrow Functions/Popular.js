class Popular extends React.Component{
    constructor(props){
        super();
        this.state = {
            selectedLanguage: 'All',
            repos: null,
        };

        this.updateLanguage = this.updateLanguage.bind(this);
    }
    componentDidMount(){
        this.updateLanguage(this.state.selectedLanguage)
    }
    updateLanguage(lang){
        this.setState(function(){
            return{
                selectedLanguage: lang,
                repos: null
            }
        });

        api.fetchPopularResponse(lang)
        .then((repos) => {
            this.setState(() => console.log('repos', repos) || ({
                    repos: repos
            }));
        });
    }
    render(){
        return(
            <div>
                <SelectedLanguage
                    selectedLanguage={this.state.selectedLanguage}
                    onSelect={this.updateLanguage}
                />
                {!this.state.repos
                ? <Loading/>
                : <RepoGrid repos={this.state.repos} />}
            </div>   
        )
    }
}