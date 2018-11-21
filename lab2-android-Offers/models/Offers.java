package models;

import com.example.calatour.calatour.R;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by Student on 11/20/2018.
 */

public class Offers {
    List<Offer> offerList;

    public Offers() {
        offerList = new ArrayList<Offer>();
        Offer o1 = new Offer("Barcelona, 3 nights", "Barcelona has many venues for live music and theatre, including the world-renowned Gran Teatre del Liceu opera", 300, R.drawable.offer_1);
        Offer o2 = new Offer("Maldive, 7 nights", "The first Maldivians did not leave any archaeological artifacts. Their buildings were probably built of wood, palm", 1050, R.drawable.offer_2);
        Offer o3 = new Offer("Thailand, 10 nights", "The andaman Sea is a precious natural resource as it hosts the most popular and luxurious resorts in Asia. Phuket", 1250, R.drawable.offer_3);
        offerList.add(o1);
        offerList.add(o2);
        offerList.add(o3);
    }

    public List<Offer> getOfferList() {
        return offerList;
    }

}
