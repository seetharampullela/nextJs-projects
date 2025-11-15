/* 
This is a simple loading component that displays a loading message while the blog page is being loaded.
Loading UI is defined in loading.tsx file in the same folder
to show the feedback while navigating to a page we use loading.tsx file to show loaders while the actual page is fetching the UI.
Next.js keeps shared layouts interactive while new content loads
User can still use things like navigation menus or sidebars even if the main content isn't ready yet
*/
export default function loading() {
  return <h1>loading</h1>;
}
