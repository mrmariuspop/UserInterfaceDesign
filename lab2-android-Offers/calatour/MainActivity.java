package com.example.calatour.calatour;

import android.annotation.SuppressLint;
import android.content.Intent;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;

public class MainActivity extends AppCompatActivity {
    Button btnSignIn;
    EditText editTxtUsername, editTxtPassword;
    TextView txtViewUsernameErr, txtViewPasswordErr;
    TextView txtViewLoginErr;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        editTxtUsername = (EditText)findViewById(R.id.editTxtUsername);
        editTxtPassword = (EditText)findViewById(R.id.editTxtPassword);

        txtViewUsernameErr = (TextView)findViewById(R.id.txtViewUsernameErr);
        txtViewPasswordErr = (TextView)findViewById(R.id.txtViewPasswordErr);
        txtViewLoginErr = (TextView)findViewById(R.id.txtViewLoginErr);

        btnSignIn = (Button)findViewById(R.id.btnSignIn);
        btnSignIn.setOnClickListener(new View.OnClickListener() {
            @SuppressLint("ResourceAsColor")
            @Override
            public void onClick(View view) {
                txtViewUsernameErr.setText("");
                txtViewPasswordErr.setText("");
                txtViewLoginErr.setText("");

                if(editTxtUsername.getText().toString().equals("admin") && editTxtPassword.getText().toString().equals("password"))
                {
                    txtViewLoginErr.setText("Login successfull!");
                    //txtViewLoginErr.setTextColor(R.color.colorSuccess);
                    txtViewLoginErr.setTextColor(getResources().getColor(R.color.colorSuccess, null));

                    Intent intent = new	Intent(MainActivity.this, OffersActivity.class);
                    startActivity(intent);
                } else {
                    if(editTxtUsername.getText().toString().equals("admin") || editTxtPassword.getText().toString().equals("password")) {
                        txtViewLoginErr.setText("Login failed.\n Username or password is incorrect!");
                        //txtViewLoginErr.setTextColor(R.color.colorError);
                        txtViewLoginErr.setTextColor(getResources().getColor(R.color.colorError, null));
                    } else{
                        if(editTxtUsername.getText().toString().equals("")) txtViewUsernameErr.setText("Username cannot be empty!");
                        else if(editTxtUsername.getText().toString().length() < 3) txtViewUsernameErr.setText("Username is too short!");

                        if(editTxtPassword.getText().toString().equals("")) txtViewPasswordErr.setText("Password cannot be empty!");
                        else if(editTxtPassword.getText().toString().length() < 6) txtViewPasswordErr.setText("Password is too short!");
                    }
                }
            }
        });
    }
}
