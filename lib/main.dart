import 'package:flutter/material.dart';

void main() {
  runApp(const MaCarteEtudiant());
}

class MaCarteEtudiant extends StatelessWidget {
  const MaCarteEtudiant({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'Ma carte étudiant',
      home: Scaffold(
        backgroundColor: const Color(0xFFE3F2FD),

        appBar: AppBar(
          title: const Text('Carte Étudiant'),
          backgroundColor: Colors.blue,
          foregroundColor: Colors.white,
          centerTitle: true,
        ),

        body: Center(
          child: Card(
            margin: const EdgeInsets.all(20),
            elevation: 8,
            shape: RoundedRectangleBorder(
              borderRadius: BorderRadius.circular(20),
            ),

            child: Padding(
              padding: const EdgeInsets.all(24),

              child: Column(
                mainAxisSize: MainAxisSize.min,
                children: [
                  const Icon(
                    Icons.school,
                    size: 80,
                    color: Colors.blue,
                  ),

                  const SizedBox(height: 15),

                  const Text(
                    'Ma Carte Étudiant',
                    style: TextStyle(
                      fontSize: 24,
                      fontWeight: FontWeight.bold,
                      color: Colors.blue,
                    ),
                  ),

                  const SizedBox(height: 20),

                  const Text(
                    'Nom complet : Hamouda',
                    style: TextStyle(
                      fontSize: 20,
                      fontWeight: FontWeight.bold,
                      color: Colors.deepPurple,
                    ),
                  ),

                  const SizedBox(height: 10),

                  const Text(
                    'Spécialité : E-Business',
                    style: TextStyle(
                      fontSize: 18,
                      fontStyle: FontStyle.italic,
                      color: Colors.teal,
                    ),
                  ),

                  const SizedBox(height: 10),

                  const Text(
                    'École : ESSECT',
                    style: TextStyle(
                      fontSize: 18,
                      color: Colors.black87,
                    ),
                  ),

                  const SizedBox(height: 20),

                  Image.network(
                    'https://picsum.photos/200',
                    width: 120,
                    height: 100,
                    fit: BoxFit.cover,
                    errorBuilder: (context, error, stackTrace) {
                      return const Icon(
                        Icons.account_circle,
                        size: 100,
                        color: Colors.grey,
                      );
                    },
                  ),

                  const SizedBox(height: 15),

                  const Text(
                    'Année universitaire : 2026-2027',
                    style: TextStyle(
                      fontSize: 14,
                      color: Colors.grey,
                    ),
                  ),
                ],
              ),
            ),
          ),
        ),
      ),
    );
  }
}