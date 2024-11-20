import 'package:flutter/material.dart';
import 'package:flutter1/pages/registerBookPage.dart';
import 'package:flutter1/pages/library.dart';

void main() {
  runApp(MainApp());
}

class MainApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Minha Estante',
      debugShowCheckedModeBanner: false,
      home: BookListScreen(), 
      routes: {
        '/registerbook': (context) =>
            RegisterBookPage(), // Rota para o cadastro do livro
        '/library': (context) => BookListScreen(), // Rota para a biblioteca
      },
    );
  }
}
