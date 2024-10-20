import 'package:flutter/material.dart';
import 'package:flutter1/components/bookForm.dart';
import 'package:http/http.dart' as http;
import 'dart:convert';

class RegisterBookPage extends StatefulWidget {
  @override
  RegisterBookPageState createState() => RegisterBookPageState();
}

class RegisterBookPageState extends State<RegisterBookPage> {
  final _formKey = GlobalKey<FormState>();
  String title = '';
  String edition = '';
  String author = '';
  String pages = '';
  String genre = '';
  String publishDate = '';
  String publisher = '';
  String rating = '';
  String successMessage = '';
  String errorMessage = '';

  Future<void> registerBook() async {
    final url = Uri.parse('https://minhaestante-mss-book-5096cba7f21c.herokuapp.com:/api/book');
    final book = {
      'title': title,
      'edition': int.parse(edition),
      'author': author,
      'pages': int.parse(pages),
      'genre': genre,
      'publishDate': convertToTimestamp(publishDate),
      'publisher': publisher,
      'rating': 0,
    };

    try {
      final response = await http.post(
        url,
        headers: {'Content-Type': 'application/json'},
        body: jsonEncode(book),
      );

      if (response.statusCode == 201) {
        setState(() {
          print("livro cadastradp");
          successMessage = 'Livro cadastrado com sucesso!';
          errorMessage = '';
        });
      } else {
        setState(() {
          print("livro n cadastradp");
          errorMessage = 'Erro ao cadastrar livro: ${response.body}';
          successMessage = '';
        });
      }
    } catch (error) {
      setState(() {
        print("Erro de conexão");
        errorMessage = 'Erro de conexão: $error';
        successMessage = '';
      });
    }
  }

  int convertToTimestamp(String dateString) {
    final parts = dateString.split('/');
    final day = int.parse(parts[0]);
    final month = int.parse(parts[1]);
    final year = int.parse(parts[2]);
    return DateTime(year, month, day).millisecondsSinceEpoch;
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Padding(
          padding: const EdgeInsets.symmetric(vertical: 16.0),
          child: Text(
            'CADASTRO DO LIVRO',
            style: TextStyle(
              color: Colors.white,
              fontSize: 24.0,
              fontWeight: FontWeight.bold,
            ),
          ),
        ),
        backgroundColor: Colors.blue,
      ),
      body: Container(
        color: Colors.grey[200],
        padding: const EdgeInsets.all(8.0),
        child: Center(
          child: SingleChildScrollView(
            child: Form(
              key: _formKey,
              child: Column(
                mainAxisAlignment: MainAxisAlignment.center,
                crossAxisAlignment: CrossAxisAlignment.center,
                children: <Widget>[
                  Padding(
                    padding: EdgeInsets.only(bottom: 3.0),
                    child: TextForm(
                      value1: 'Título',
                      value2: 'Campo título é inválido.',
                      onSaved: (value) => title = value!,
                    ),
                  ),
                  Padding(
                    padding: EdgeInsets.only(bottom: 3.0),
                    child: TextForm(
                      value1: 'Edição',
                      value2: 'Campo Edição é inválido.',
                      onSaved: (value) => edition = value!,
                    ),
                  ),
                  Padding(
                    padding: EdgeInsets.only(bottom: 3.0),
                    child: TextForm(
                      value1: 'Autor',
                      value2: 'Campo Autor é inválido.',
                      onSaved: (value) => author = value!,
                    ),
                  ),
                  Padding(
                    padding: EdgeInsets.only(bottom: 3.0),
                    child: TextForm(
                      value1: 'Páginas',
                      value2: 'Campo Páginas é inválido.',
                      onSaved: (value) => pages = value!,
                    ),
                  ),
                  Padding(
                    padding: EdgeInsets.only(bottom: 3.0),
                    child: TextForm(
                      value1: 'Gênero',
                      value2: 'Campo Gênero é inválido.',
                      onSaved: (value) => genre = value!,
                    ),
                  ),
                  Padding(
                    padding: EdgeInsets.only(bottom: 3.0),
                    child: TextForm(
                      value1: 'Data de Publicação',
                      value2: 'Campo Data de Publicação inválida. Esperado: data.',
                      onSaved: (value) => publishDate = value!,
                    ),
                  ),
                  Padding(
                    padding: EdgeInsets.only(bottom: 3.0),
                    child: TextForm(
                      value1: 'Editora',
                      value2: 'Campo Editora é inválido.',
                      onSaved: (value) => publisher = value!,
                    ),
                  ),
                  ElevatedButton(
                    onPressed: () {
                      if (_formKey.currentState!.validate()) {
                        _formKey.currentState!.save();
                        registerBook(); // Chama a função para registrar o livro
                      }
                    },
                    style: ElevatedButton.styleFrom(
                      backgroundColor: Colors.blueAccent,
                      padding: const EdgeInsets.symmetric(
                        horizontal: 40.0,
                        vertical: 10.0,
                      ),
                    ),
                    child: const Text(
                      'Cadastrar Livro',
                      style: TextStyle(fontSize: 18.0),
                    ),
                  ),
                  if (successMessage.isNotEmpty)
                    Text(
                      successMessage,
                      style: TextStyle(color: Colors.green, fontSize: 16),
                    ),
                  if (errorMessage.isNotEmpty)
                    Text(
                      errorMessage,
                      style: TextStyle(color: Colors.red, fontSize: 16),
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
