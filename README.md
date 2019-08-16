# Banks Search Application
-------------------------------
## Developed a single page web app (in AngularJS)as a part of assesment.
------------------------------------------------------------------------------------------
### Features:

1. This app list and search for banks that are fetched from the API mentioned below. 
2. There is a dropdown for cities and a search bar. As you type in the search area, the table is dynamically filtered(client-side filtering). Search is across all fields.
3. Pagination is implemented and the user is allowed to select page size.
4. User can mark some banks as favourites and can view these details seperately. 
5. Favourites are stored as persist state event i.e should the website get refreshed or reloaded they remain unaffected.
6. Bank names are clickable links with a route like #banks/{{bankid}}.

#### The backend API used to get a list of banks: https://vast-shore-74260.herokuapp.com/banks?city=MUMBAI 
