export default function PrivateFolder() {
  return (
    <div>
      This is a private folder. _(UnderScore) in the file name makes the folder
      a private one from the nextJs route and we cannot access this from route
      navigation. But if you want the URL to have underscore, name the folder
      with %5F like URL encoded.
    </div>
  );
}
