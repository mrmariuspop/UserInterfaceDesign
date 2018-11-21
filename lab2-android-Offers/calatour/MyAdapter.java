package com.example.calatour.calatour;

import android.content.Context;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ArrayAdapter;
import android.widget.ImageView;
import android.widget.TextView;

import java.util.List;

import models.Offer;

/**
 * Created by Student on 11/20/2018.
 */

public class MyAdapter extends ArrayAdapter<Offer> {

    List<Offer> offers;
    public MyAdapter(Context context, List<Offer> objects) {
        super(context, 0, objects);
        offers = objects;
    }

    public View getView(int position, View convertView, ViewGroup parent) {
        // get a reference to the LayoutInflater service
        LayoutInflater inflater = (LayoutInflater) this.getContext().getSystemService(Context.LAYOUT_INFLATER_SERVICE);
        // check if	we can reuse a previously defined cell which now is	not	visible	anymore
        View myRow = (convertView == null) ? inflater.inflate(R.layout.element_lista_oferte, parent,false) : convertView;
        // get the visual elements and update them with the	information	from the model
        TextView title = (TextView) myRow.findViewById(R.id.txtTitlu);
        title.setText(offers.get(position).getTitlu());

        ImageView img = (ImageView)myRow.findViewById(R.id.imageView);
        img.setImageResource(offers.get(position).getImage());

        TextView pret = (TextView) myRow.findViewById(R.id.txtPret);
        pret.setText(String.valueOf(offers.get(position).getPret()) + " EUR");

        TextView descriere = (TextView) myRow.findViewById(R.id.txtDescriere);
        descriere.setText(offers.get(position).getDescriere());

        return	myRow;
    }


}
