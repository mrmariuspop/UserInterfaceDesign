package models;

/**
 * Created by Student on 11/20/2018.
 */

public class Offer {
    private String titlu;
    private String descriere;
    private int pret;
    private int image;

    public Offer(String titlu, String descriere, int pret, int image) {
        this.titlu = titlu;
        this.descriere = descriere;
        this.pret = pret;
        this.image = image;
    }

    public String getTitlu() { return titlu; }

    public void setTitlu(String titlu) {
        this.titlu = titlu;
    }

    public String getDescriere() {
        return descriere;
    }

    public void setDescriere(String descriere) {
        this.descriere = descriere;
    }

    public int getPret() {
        return pret;
    }

    public void setPret(int pret) {
        this.pret = pret;
    }

    public int getImage() {
        return image;
    }

    public void setImage(int image) {
        this.image = image;
    }
}
