{
  description = "A very basic flake";

  outputs = { self, nixpkgs }:
    let pkgs = nixpkgs.legacyPackages.x86_64-linux; in
    {

      devShell.x86_64-linux = pkgs.mkShell
        {
          
          nativeBuildInputs = with pkgs; [
            nodejs-16_x
            yarn
          ];
        };
    };
}
