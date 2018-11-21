package com.example.calatour.calatour;

import android.os.Bundle;
import android.os.CountDownTimer;
import android.support.v7.app.AppCompatActivity;
import android.view.ContextMenu;
import android.view.MenuItem;
import android.view.View;
import android.widget.AdapterView;
import android.widget.ListView;
import android.widget.ProgressBar;

import models.Offers;

/**
 * Created by Student on 11/20/2018.
 */

public class OffersActivity extends AppCompatActivity {
    ListView myListView;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_offers);

        playTime();

        Offers oferte = new Offers();
        MyAdapter adapter = new MyAdapter(this, oferte.getOfferList());
        myListView = (ListView) findViewById(R.id.offersList);
        myListView.setAdapter(adapter);
        adapter.notifyDataSetChanged();
        registerForContextMenu(myListView);
    }

    public void onCreateContextMenu(ContextMenu menu, View v, ContextMenu.ContextMenuInfo menuInfo) {
        super.onCreateContextMenu(menu, v, menuInfo);
        // verificăm	dacă	meniul	este	creat	pentru	lista	vizată
        if (v.getId() == R.id.offersList) {
            //	identificăm	elementul	selectat	din	listă
            AdapterView.AdapterContextMenuInfo info = (AdapterView.AdapterContextMenuInfo) menuInfo;
            menu.setHeaderTitle(oferte.getOfferList().get(info.position).getTitlu());
            //	încărcăm	structura	vizuală	a	meniului
            getMenuInflater().inflate(R.menu.menu_items, menu);
        }
    }

    public boolean onContextItemSelected(MenuItem item) {
//	accesarea	informației	atașate meniului contextual
        AdapterView.AdapterContextMenuInfo info =
                (AdapterView.AdapterContextMenuInfo) item.getMenuInfo();
//	identificarea	elementului	selectat	din	meniu,	folosind	ID-urile	predefinite
        if (item.getItemId() == R.id.AddItem) {
        } else if (item.getItemId() == R.id.RemoveItem) {
        }
        return super.onContextItemSelected(item);
    }

    public void playTime() {
        CountDownTimer t = new CountDownTimer(3000, 100) {
            @Override
            public void onTick(long millisUntilFinished) {

            }

            @Override
            public void onFinish() {
                ProgressBar p = findViewById(R.id.pb);
                p.setVisibility(View.GONE);
            }
        }
        .start();
    }
}
