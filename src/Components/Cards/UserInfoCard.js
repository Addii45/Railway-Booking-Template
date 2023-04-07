import classes from './Cards.module.css'

const UserInfoCard = () => {

    const user_data = [
        ['User ID', '43242351223'],
        ['Name', 'Adithya Balachandra'],
        ['Username', 'adib45'],
        ['Email', 'adi@gmail.com'],
        ['Age', '21'],
        ['Gender', 'Male']
    ]


    return(
        <div className={classes.UserCardContainer}>        
            <table className="highlight container">
                <tbody>
                    {user_data.map(info => <tr key={info[0]}><th>{info[0]}</th><td>{info[1]}</td></tr>)}
                </tbody>
            </table>
        </div>
    )
}

export default UserInfoCard