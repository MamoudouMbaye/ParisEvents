const StorageService = {
    myLocalStorage () {
        let likedIds = localStorage.getItem('MamoudouFavoris_PE');
        
        likedIds = likedIds ? JSON.parse(likedIds) : [];

        return likedIds
    }
};

export default StorageService;