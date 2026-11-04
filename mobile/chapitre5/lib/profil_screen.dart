import 'package:flutter/material.dart';

class ProfilScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('Profil')),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Text(
              'Nom : Mohamed Tounsi',
              style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold),
            ),
            SizedBox(height: 10),
            Text(
              'Spécialité : 3 E-Business',
              style: TextStyle(fontSize: 18),
            ),
            SizedBox(height: 30),
            ElevatedButton(
              child: Text('Voir les détails'),
              onPressed: () {
                Navigator.pushNamed(
                  context,
                  '/details',
                  arguments: 'Bienvenue sur l\'écran Détails !',
                );
              },
            ),
          ],
        ),
      ),
    );
  }
}