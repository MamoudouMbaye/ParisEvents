import React, { useEffect, useState } from 'react';
import Border from '../components/Border';
import Card from '../components/Card';
import Navbar from '../components/Navbar';
import EventService from '../services/EventService';
import StorageService from '../services/StorageService';

const Favorites = () => {
    const [myFavorites, setMyFavorites] = useState(null);

    let likedIds = StorageService.myLocalStorage();

    
    function fetchFavoritesData() {
        return Promise.all(likedIds.map((id) => EventService.fetchId(id).then((response) => response)))
            .then((data) => {
                return data;
            });
    }

    
    useEffect(() => {
        const useFetchFavoritesData = fetchFavoritesData();
        useFetchFavoritesData.then((data) => {
            setMyFavorites(data)
        })
        
    }, [])

    return (
        <div className="pages-background favorites">
            <Navbar />
            <main>
                <h1 class="title-large">Événements enregistrés</h1>
                <div className="card-container">
                    {myFavorites && myFavorites.length === 0 && <h2 class="title-small">Aucun événement n'a été enregistré</h2>}
                    {myFavorites && myFavorites.length !== 0 && myFavorites.map((data) => <Card key={data.id} id={data.id} fields={data.fields} />)}
                </div>
            </main>
            <Border />
        </div>
    );
};

export default Favorites;