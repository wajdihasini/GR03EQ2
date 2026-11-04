import 'package:flutter/material.dart';

class AccueilScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('Accueil')),
      body: Center(
        child: ElevatedButton(
          child: Text('Aller au Profil'),
          onPressed: () {
            Navigator.pushNamed(context, '/profil');
          },
        ),
      ),
    );
  }
}